export default class ResultView {
    constructor(root) { this.root = root; }
    render(html) { if (this.root) this.root.innerHTML = html; }
    showHint(text) { if (this.root) this.root.innerHTML = text; }
    renderManual(res) {
      if (!this.root) return;
      const html = `
        🎲 <b>Találatok:</b> ${res.roundedHits}<br>
        💀 <b>Sebző találatok:</b> ${res.roundedWounds}<br>
        🛡️ <b>Mentő után:</b> ${res.roundedFailedSaves}<br>
        🎯 <b>Sebzés:</b> ${res.roundedDamage}
      `;
      this.root.innerHTML = html;
    }
  }