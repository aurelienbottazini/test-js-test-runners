const sum3175 = require('../sum3175.js');

test('adds 11 + 8 to equal 19 + 0.4406629177488226', () => {
  expect(sum3175(11, 8)).toBe(19 + 0.4406629177488226);
});