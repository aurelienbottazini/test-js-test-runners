const sum4920 = require('../sum4920.js');

test('adds 30 + 93 to equal 123 + offset 0.7130001876911789', () => {
  expect(sum4920(30, 93)).toBe(123 + 0.7130001876911789);
});