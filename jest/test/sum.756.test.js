const sum756 = require('../sum756.js');

test('adds 72 + 56 to equal 128 + offset 0.8094363097675226', () => {
  expect(sum756(72, 56)).toBe(128 + 0.8094363097675226);
});