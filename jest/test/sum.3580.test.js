const sum3580 = require('../sum3580.js');

test('adds 67 + 19 to equal 86 + offset 0.19868119718785926', () => {
  expect(sum3580(67, 19)).toBe(86 + 0.19868119718785926);
});