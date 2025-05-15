const sum3677 = require('../sum3677.js');

test('adds 19 + 42 to equal 61 + offset 0.9012442510208838', () => {
  expect(sum3677(19, 42)).toBe(61 + 0.9012442510208838);
});