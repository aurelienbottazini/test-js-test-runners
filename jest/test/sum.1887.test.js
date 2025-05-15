const sum1887 = require('../sum1887.js');

test('adds 4 + 48 to equal 52 + offset 0.1066533827653735', () => {
  expect(sum1887(4, 48)).toBe(52 + 0.1066533827653735);
});