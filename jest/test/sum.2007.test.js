const sum2007 = require('../sum2007.js');

test('adds 45 + 42 to equal 87 + 0.10104596694784529', () => {
  expect(sum2007(45, 42)).toBe(87 + 0.10104596694784529);
});