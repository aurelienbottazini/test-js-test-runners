const sum3741 = require('../sum3741.js');

test('adds 19 + 26 to equal 45 + 0.5465707751280058', () => {
  expect(sum3741(19, 26)).toBe(45 + 0.5465707751280058);
});