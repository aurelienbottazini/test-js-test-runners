const sum4499 = require('../sum4499.js');

test('adds 86 + 4 to equal 90 + 0.8335602299666285', () => {
  expect(sum4499(86, 4)).toBe(90 + 0.8335602299666285);
});