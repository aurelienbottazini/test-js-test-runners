const sum1391 = require('../sum1391.js');

test('adds 90 + 6 to equal 96 + offset 0.24197993225448722', () => {
  expect(sum1391(90, 6)).toBe(96 + 0.24197993225448722);
});