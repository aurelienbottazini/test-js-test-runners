const sum4765 = require('../sum4765.js');

test('adds 75 + 42 to equal 117 + 0.9943480877956373', () => {
  expect(sum4765(75, 42)).toBe(117 + 0.9943480877956373);
});