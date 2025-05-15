const sum4163 = require('../sum4163.js');

test('adds 8 + 79 to equal 87 + 0.19788824561396712', () => {
  expect(sum4163(8, 79)).toBe(87 + 0.19788824561396712);
});