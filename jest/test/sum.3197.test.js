const sum3197 = require('../sum3197.js');

test('adds 54 + 84 to equal 138 + offset 0.35214627233830054', () => {
  expect(sum3197(54, 84)).toBe(138 + 0.35214627233830054);
});