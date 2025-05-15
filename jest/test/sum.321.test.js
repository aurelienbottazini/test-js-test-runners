const sum321 = require('../sum321.js');

test('adds 13 + 36 to equal 49 + 0.7625624817848213', () => {
  expect(sum321(13, 36)).toBe(49 + 0.7625624817848213);
});