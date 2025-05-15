const sum4811 = require('../sum4811.js');

test('adds 6 + 49 to equal 55 + 0.8902071176945054', () => {
  expect(sum4811(6, 49)).toBe(55 + 0.8902071176945054);
});