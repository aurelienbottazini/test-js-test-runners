const sum1887 = require('../sum1887.js');

test('adds 55 + 87 to equal 142 + 0.1414642884400622', () => {
  expect(sum1887(55, 87)).toBe(142 + 0.1414642884400622);
});