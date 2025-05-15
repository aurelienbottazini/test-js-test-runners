const sum4459 = require('../sum4459.js');

test('adds 56 + 72 to equal 128 + offset 0.8276621081366834', () => {
  expect(sum4459(56, 72)).toBe(128 + 0.8276621081366834);
});