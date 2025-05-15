const sum402 = require('../sum402.js');

test('adds 59 + 63 to equal 122 + offset 0.2803717243040251', () => {
  expect(sum402(59, 63)).toBe(122 + 0.2803717243040251);
});