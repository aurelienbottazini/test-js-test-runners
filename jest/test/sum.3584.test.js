const sum3584 = require('../sum3584.js');

test('adds 69 + 54 to equal 123 + 0.4849922965207225', () => {
  expect(sum3584(69, 54)).toBe(123 + 0.4849922965207225);
});