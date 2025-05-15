const sum4926 = require('../sum4926.js');

test('adds 97 + 23 to equal 120 + 0.6809590363717234', () => {
  expect(sum4926(97, 23)).toBe(120 + 0.6809590363717234);
});