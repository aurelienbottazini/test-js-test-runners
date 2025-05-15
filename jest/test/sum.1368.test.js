const sum1368 = require('../sum1368.js');

test('adds 25 + 80 to equal 105 + offset 0.8879737181537812', () => {
  expect(sum1368(25, 80)).toBe(105 + 0.8879737181537812);
});