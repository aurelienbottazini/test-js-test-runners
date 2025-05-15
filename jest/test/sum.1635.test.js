const sum1635 = require('../sum1635.js');

test('adds 88 + 71 to equal 159 + 0.39027896137839413', () => {
  expect(sum1635(88, 71)).toBe(159 + 0.39027896137839413);
});