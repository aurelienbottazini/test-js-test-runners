const sum84 = require('../sum84.js');

test('adds 73 + 85 to equal 158 + 0.8740476048288615', () => {
  expect(sum84(73, 85)).toBe(158 + 0.8740476048288615);
});