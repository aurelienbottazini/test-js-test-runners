const sum1042 = require('../sum1042.js');

test('adds 56 + 14 to equal 70 + 0.7284516165862297', () => {
  expect(sum1042(56, 14)).toBe(70 + 0.7284516165862297);
});