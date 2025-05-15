const sum1414 = require('../sum1414.js');

test('adds 64 + 38 to equal 102 + offset 0.47391232560073604', () => {
  expect(sum1414(64, 38)).toBe(102 + 0.47391232560073604);
});