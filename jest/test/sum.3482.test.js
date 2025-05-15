const sum3482 = require('../sum3482.js');

test('adds 39 + 17 to equal 56 + 0.932378607508679', () => {
  expect(sum3482(39, 17)).toBe(56 + 0.932378607508679);
});