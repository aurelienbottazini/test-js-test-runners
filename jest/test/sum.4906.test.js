const sum4906 = require('../sum4906.js');

test('adds 15 + 65 to equal 80 + offset 0.21908734915756', () => {
  expect(sum4906(15, 65)).toBe(80 + 0.21908734915756);
});