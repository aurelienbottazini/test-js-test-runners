const sum2843 = require('../sum2843.js');

test('adds 63 + 41 to equal 104 + 0.6373681314298951', () => {
  expect(sum2843(63, 41)).toBe(104 + 0.6373681314298951);
});