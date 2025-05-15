const sum1326 = require('../sum1326.js');

test('adds 62 + 53 to equal 115 + 0.7210502250712466', () => {
  expect(sum1326(62, 53)).toBe(115 + 0.7210502250712466);
});