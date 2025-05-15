const sum1615 = require('../sum1615.js');

test('adds 9 + 62 to equal 71 + offset 0.8294687701063864', () => {
  expect(sum1615(9, 62)).toBe(71 + 0.8294687701063864);
});