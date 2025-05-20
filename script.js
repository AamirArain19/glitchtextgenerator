function zalgoify(text) {
  const zalgo_up = ["̍","̎","̄","̅","̿","̑","̆","̐","͒","͗","͑"];
  return text.split('').map(char => char + zalgo_up[Math.floor(Math.random() * zalgo_up.length)]).join('');
}
function mirror(text) {
  const mirrored = { a: 'ɒ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'ʃ', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z' };
  return text.toLowerCase().split('').map(c => mirrored[c] || c).join('');
}
function flip(text) {
  return text.split('').reverse().join('');
}
function generateGlitch() {
  const input = document.getElementById('inputText').value;
  const style = document.getElementById('glitchStyle').value;
  let output = input;
  if (style === 'zalgo') output = zalgoify(input);
  if (style === 'mirror') output = mirror(input);
  if (style === 'flip') output = flip(input);
  document.getElementById('outputText').textContent = output;
}
function copyGlitch() {
  const text = document.getElementById('outputText').textContent;
  navigator.clipboard.writeText(text).then(() => alert("Copied!"));
}
document.getElementById('inputText').addEventListener('input', generateGlitch);
document.getElementById('glitchStyle').addEventListener('change', generateGlitch);
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
