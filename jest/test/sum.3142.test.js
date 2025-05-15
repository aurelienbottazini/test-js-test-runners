const sum3142 = require('../sum3142.js');

test('adds 3 + 64 to equal 67 + 0.6636558801659034', () => {
  expect(sum3142(3, 64)).toBe(67 + 0.6636558801659034);
});