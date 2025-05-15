const sum4917 = require('../sum4917.js');

test('adds 50 + 2 to equal 52 + offset 0.38975833589775366', () => {
  expect(sum4917(50, 2)).toBe(52 + 0.38975833589775366);
});