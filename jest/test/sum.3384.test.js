const sum3384 = require('../sum3384.js');

test('adds 91 + 34 to equal 125 + offset 0.618837133423145', () => {
  expect(sum3384(91, 34)).toBe(125 + 0.618837133423145);
});