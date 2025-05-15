const sum1155 = require('../sum1155.js');

test('adds 8 + 63 to equal 71 + offset 0.0739813628042546', () => {
  expect(sum1155(8, 63)).toBe(71 + 0.0739813628042546);
});