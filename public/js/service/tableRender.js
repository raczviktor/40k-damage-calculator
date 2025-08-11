function nice(key) {
    const map = { termagant: 'Termagant', intercessor: 'Intercessor', terminator: 'Terminator', gladiator: 'Gladiator', landraider: 'Land Raider' };
    return map[key] || key;
  }
  
  export function transpose(rows) {
    const defenders = rows.map(r => nice(r.key));
    const metrics = [
      { label: 'Találatok', key: 'hits' },
      { label: 'Sebző találatok', key: 'wounds' },
      { label: 'Mentő után', key: 'failed' },
      { label: 'Sebzés', key: 'damage' },
    ];
  
    let html = `<div class="scroll"><table style="width:100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th style="text-align:left; padding:8px; border-bottom:2px solid #ccc;">Metrika</th>`;
    defenders.forEach(def => { html += `<th style=\"text-align:center; padding:8px; border-bottom:2px solid #ccc;\">${def}</th>`; });
    html += `</tr></thead><tbody>`;
  
    metrics.forEach(m => {
      html += `<tr>
        <td style="padding:8px; font-weight:600; border-bottom:1px solid #eee;">${m.label}</td>`;
      rows.forEach(r => {
        const val = Number(r[m.key]).toFixed(2);
        const cellStyle = m.key === 'damage' ? 'font-weight:bold; color:#b91c1c;' : '';
        html += `<td style=\"padding:8px; text-align:center; border-bottom:1px solid #eee; ${cellStyle}\">${val}</td>`;
      });
      html += `</tr>`;
    });
  
    html += `</tbody></table></div>`;
    return html;
  }
  