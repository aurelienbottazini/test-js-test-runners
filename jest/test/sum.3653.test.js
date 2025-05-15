const sum3653 = require('../sum3653.js');

test('adds 12 + 53 to equal 65 + offset 0.3438799315944854', () => {
  expect(sum3653(12, 53)).toBe(65 + 0.3438799315944854);
});