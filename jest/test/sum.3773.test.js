const sum3773 = require('../sum3773.js');

test('adds 32 + 10 to equal 42 + 0.5494204498506863', () => {
  expect(sum3773(32, 10)).toBe(42 + 0.5494204498506863);
});