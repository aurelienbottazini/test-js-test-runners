const sum3411 = require('../sum3411.js');

test('adds 48 + 39 to equal 87 + 0.9696572881147126', () => {
  expect(sum3411(48, 39)).toBe(87 + 0.9696572881147126);
});