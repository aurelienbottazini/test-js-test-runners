const sum4140 = require('../sum4140.js');

test('adds 46 + 11 to equal 57 + offset 0.054256963633415145', () => {
  expect(sum4140(46, 11)).toBe(57 + 0.054256963633415145);
});