// services/tableRender.js – transzponált tábla + meta (pont, össz-wounds) + variánsok
function nice(key) {
  const map = {
    termagant: 'Termagant',
    intercessor: 'Intercessor',
    terminator: 'Terminator',
    gladiator: 'Gladiator',
    landraider: 'Land Raider',
    daemonPrince: 'Daemon Prince'
  };
  return map[key] || key;
}

export function transpose(rows, metaByKey = {}) {
  const nice = (key) => ({
    termagant: 'Termagant',
    intercessor: 'Intercessor',
    terminator: 'Terminator',
    gladiator: 'Gladiator',
    landraider: 'Land Raider',
    daemonPrince: 'Daemon Prince'
  }[key] || key);

  // Variánsok kiterjesztése oszlopokká
  const columns = [];
  for (const r of rows) {
    const meta = metaByKey[r.key] || {};
    const baseLabel = meta.label || nice(r.key);
    const ppm = meta.pointsPerModel ?? null;
    const wpm = meta.woundsPerModel ?? null;

    const addCol = (models, suffix='') => {
      const n = Math.max(1, Number(models || meta.defaultModels || 1));
      columns.push({
        key: r.key,
        base: r,
        label: suffix ? `${baseLabel} (${suffix})` : baseLabel,
        points: ppm != null ? ppm * n : null,
        totalWounds: wpm != null ? wpm * n : null
      });
    };

    if (Array.isArray(meta.variants) && meta.variants.length) {
      for (const m of meta.variants) addCol(m, `${m}`);
    } else {
      addCol(meta.defaultModels || 1);
    }
  }

  const metrics = [
    { label: 'Pont (össz)', meta: 'points' },
    { label: 'Wounds (össz)', meta: 'totalWounds' },
    { label: 'Találatok', key: 'hits' },
    { label: 'Sebző találatok', key: 'wounds' },
    { label: 'Mentő után', key: 'failed' },
    { label: 'Sebzés', key: 'damage', strong: true }
  ];

  let html = `<div class="scroll"><table style="width:100%; border-collapse:collapse;">
    <thead><tr><th style="text-align:left; padding:8px; border-bottom:2px solid #ccc;">Metrika</th>`;
  for (const c of columns) {
    html += `<th style="text-align:center; padding:8px; border-bottom:2px solid #ccc;">${c.label}</th>`;
  }
  html += `</tr></thead><tbody>`;

  for (const m of metrics) {
    html += `<tr><td style="padding:8px; font-weight:600; border-bottom:1px solid #eee;">${m.label}</td>`;
    for (const c of columns) {
      let val = '—';
      if (m.meta) val = c[m.meta] != null ? c[m.meta] : '—';
      else if (m.key) val = Number(c.base[m.key] ?? 0).toFixed(2);
      const s = m.strong ? 'font-weight:bold; color:#b91c1c;' : '';
      html += `<td style="padding:8px; text-align:center; border-bottom:1px solid #eee; ${s}">${val}</td>`;
    }
    html += `</tr>`;
  }

  html += `</tbody></table></div>`;
  return html;
}
