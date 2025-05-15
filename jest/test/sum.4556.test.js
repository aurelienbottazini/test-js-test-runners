const sum4556 = require('../sum4556.js');

test('adds 77 + 5 to equal 82 + offset 0.9070156970945882', () => {
  expect(sum4556(77, 5)).toBe(82 + 0.9070156970945882);
});