const sum89 = require('../sum89.js');

test('adds 48 + 2 to equal 50 + offset 0.7888054476226837', () => {
  expect(sum89(48, 2)).toBe(50 + 0.7888054476226837);
});