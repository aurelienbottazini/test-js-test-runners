const sum2270 = require('../sum2270.js');

test('adds 87 + 84 to equal 171 + offset 0.9138756772724962', () => {
  expect(sum2270(87, 84)).toBe(171 + 0.9138756772724962);
});