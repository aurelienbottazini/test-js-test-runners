const sum664 = require('../sum664.js');

test('adds 16 + 74 to equal 90 + offset 0.0808988218496669', () => {
  expect(sum664(16, 74)).toBe(90 + 0.0808988218496669);
});