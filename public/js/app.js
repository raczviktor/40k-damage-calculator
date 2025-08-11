// app.js – belépési pont (A verzió: DamageCalculator -> services/damage.js)
import { loadPartials } from './view/PartialLoader.js';
import PresetView from './view/PresetView.js';
import ManualView from './view/ManualView.js';
import ResultView from './view/ResultView.js';
import PresetController from './controller/PresetController.js';
import ManualController from './controller/ManualController.js';

import { run as runComparison } from './service/comparison.js';
import { transpose as renderTable } from './service/tableRender.js';
import * as weaponsMapper from './service/weaponsMapper.js';
import { calcTotals } from './service/damage.js';
import state from './service/state.js';

import attackerPreset from './data/attacker/index.js';
import defenderPreset from './data/defenderPreset.js';
import Defender from './model/Defender.js';
import Attacker from './model/Attacker.js';

(async function init() {
  await loadPartials();

  const presetView = new PresetView(document.getElementById('tab-preset'));
  const manualView = new ManualView(document.getElementById('tab-manual'));
  const resultView = new ResultView(document.getElementById('result'));

  const modePreset = document.getElementById('mode-preset');
  const modeManual = document.getElementById('mode-manual');
  const refreshHint = () => {
  if (modePreset?.checked) {
    resultView.showHint('💡 Válassz előre megadott támadót a táblázatos összehasonlításhoz.');
  } else {
    resultView.showHint('💡 Manuális mód: állítsd be a fegyver(eke)t és kattints a Számítás gombra.');
  }
  };
  modePreset?.addEventListener('change', refreshHint);
  modeManual?.addEventListener('change', refreshHint);

  const services = {
    state,
    weaponsMapper,
    calcTotals,
    runComparison: (mounts, phase) => runComparison({ Attacker, Defender }, mounts, phase, Object.entries(defenderPreset)),
    renderTable,
  };

  const manualCtrl = new ManualController({ view: manualView, resultView, models: { Attacker, Defender }, services });
  manualCtrl.init();

  const presetCtrl = new PresetController({ view: presetView, manualView, resultView, services, presets: { attackers: attackerPreset, defenders: defenderPreset } });
  presetCtrl.init();

  resultView.showHint('💡 Válassz előre megadott támadót a táblázatos összehasonlításhoz, vagy használd a Manuális módot a Számítás gombbal.');
})();
