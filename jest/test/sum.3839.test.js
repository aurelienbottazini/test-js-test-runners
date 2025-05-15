const sum3839 = require('../sum3839.js');

test('adds 52 + 85 to equal 137 + offset 0.9733140053019798', () => {
  expect(sum3839(52, 85)).toBe(137 + 0.9733140053019798);
});