const sum308 = require('../sum308.js');

test('adds 87 + 87 to equal 174 + 0.9697384569515864', () => {
  expect(sum308(87, 87)).toBe(174 + 0.9697384569515864);
});