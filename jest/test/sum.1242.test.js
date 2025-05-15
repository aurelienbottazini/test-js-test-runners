const sum1242 = require('../sum1242.js');

test('adds 64 + 19 to equal 83 + 0.7605456520455167', () => {
  expect(sum1242(64, 19)).toBe(83 + 0.7605456520455167);
});