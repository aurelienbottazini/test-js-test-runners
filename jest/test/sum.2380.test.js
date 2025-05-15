const sum2380 = require('../sum2380.js');

test('adds 83 + 64 to equal 147 + 0.7721618071583114', () => {
  expect(sum2380(83, 64)).toBe(147 + 0.7721618071583114);
});