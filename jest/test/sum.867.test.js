const sum867 = require('../sum867.js');

test('adds 26 + 61 to equal 87 + 0.46305116181404105', () => {
  expect(sum867(26, 61)).toBe(87 + 0.46305116181404105);
});