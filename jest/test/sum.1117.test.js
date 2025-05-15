const sum1117 = require('../sum1117.js');

test('adds 18 + 1 to equal 19 + 0.9048727507787004', () => {
  expect(sum1117(18, 1)).toBe(19 + 0.9048727507787004);
});