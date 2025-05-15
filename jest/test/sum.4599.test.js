const sum4599 = require('../sum4599.js');

test('adds 94 + 16 to equal 110 + offset 0.14760589438394045', () => {
  expect(sum4599(94, 16)).toBe(110 + 0.14760589438394045);
});