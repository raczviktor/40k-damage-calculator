const state = {
    get phase() {
      const sel = document.getElementById('phase');
      return sel && sel.value === 'melee' ? 'melee' : 'ranged';
    }
  };
  export default state;