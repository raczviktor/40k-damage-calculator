export async function loadPartials() {
    const containers = document.querySelectorAll('[data-partial]');
    const jobs = Array.from(containers).map(async (el) => {
      if (!el || el.dataset.loaded) return;
      const url = el.getAttribute('data-partial');
      try {
        const resp = await fetch(url, { cache: 'no-store' });
        el.innerHTML = await resp.text();
        el.dataset.loaded = '1';
      } catch (e) {
        el.innerHTML = `<p class="muted">❗ Nem sikerült betölteni a nézetet: ${url || ''}</p>`;
      }
    });
    await Promise.all(jobs);
  }
  