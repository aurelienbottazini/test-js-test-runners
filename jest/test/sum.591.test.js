const sum591 = require('../sum591.js');

test('adds 32 + 80 to equal 112 + offset 0.5592773043222943', () => {
  expect(sum591(32, 80)).toBe(112 + 0.5592773043222943);
});