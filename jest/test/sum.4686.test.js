const sum4686 = require('../sum4686.js');

test('adds 84 + 2 to equal 86 + 0.9769364783259448', () => {
  expect(sum4686(84, 2)).toBe(86 + 0.9769364783259448);
});