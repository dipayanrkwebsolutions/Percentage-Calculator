function calc1() {
  const a = parseFloat(document.getElementById('c1a').value);
  const b = parseFloat(document.getElementById('c1b').value);
  const r = document.getElementById('r1');
  if (isNaN(a) || isNaN(b)) { r.textContent = '—'; return; }
  r.textContent = parseFloat(((a / 100) * b).toFixed(4));
}

function calc2() {
  const a = parseFloat(document.getElementById('c2a').value);
  const b = parseFloat(document.getElementById('c2b').value);
  const r = document.getElementById('r2');
  if (isNaN(a) || isNaN(b) || b === 0) { r.textContent = '—'; return; }
  r.textContent = parseFloat(((a / b) * 100).toFixed(4));
}

function calc3() {
  const a = parseFloat(document.getElementById('c3a').value);
  const b = parseFloat(document.getElementById('c3b').value);
  const r = document.getElementById('r3');
  if (isNaN(a) || isNaN(b) || a === 0) { r.textContent = '—'; return; }
  r.textContent = parseFloat((((b - a) / Math.abs(a)) * 100).toFixed(4));
}
