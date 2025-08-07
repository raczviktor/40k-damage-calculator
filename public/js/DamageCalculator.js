export default class DamageCalculator {
    constructor(attacker, defender) {
      this.attacker = attacker;
      this.defender = defender;
    }
  
    calculateTotal() {
        let totalHits = 0;
        let totalWounds = 0;
        let totalDamage = 0;
      
        this.attacker.weapons.forEach(weapon => {
          const hitChance = weapon.getHitChance();
          const sixHitChance = 1 / 6;
          const extraHits = weapon.sustained ? sixHitChance * hitChance * weapon.attacks : 0;
          const hits = hitChance * weapon.attacks + extraHits;
      
          let autoWounds = 0;
          if (weapon.lethal) {
            autoWounds = sixHitChance * hitChance * weapon.attacks;
          }
      
          const woundChance = weapon.getWoundChance(this.defender.toughness);
          const wounds = autoWounds + (hits - autoWounds) * woundChance;
      
          const saveChance = this.getSaveChance(weapon.ap);
          const failedSaves = wounds * (1 - saveChance);
      
          totalHits += hits;
          totalWounds += wounds;
          totalDamage += failedSaves * weapon.damage;
        });
      
        const realisticDamage = Math.round(totalDamage);
      
        return {
          avgDamage: totalDamage,
          realisticDamage,
          totalHits,
          totalWounds,
          failedSaves: totalWounds * (1 - this.getSaveChance(0))
        };
      }
      
      getSaveChance(ap) {
        const save = this.defender.save;
        const invuln = this.defender.invuln;
        const modSave = Math.max(2, save + ap);
        const effectiveSave = invuln > 0 ? Math.min(modSave, invuln) : modSave;
        return (7 - effectiveSave) / 6;
      }      
  }
  