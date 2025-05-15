const sum1364 = require('../sum1364.js');

test('adds 88 + 15 to equal 103 + offset 0.6388956792291703', () => {
  expect(sum1364(88, 15)).toBe(103 + 0.6388956792291703);
});