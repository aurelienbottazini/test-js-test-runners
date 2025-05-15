const sum2992 = require('../sum2992.js');

test('adds 87 + 85 to equal 172 + offset 0.5072290326900337', () => {
  expect(sum2992(87, 85)).toBe(172 + 0.5072290326900337);
});