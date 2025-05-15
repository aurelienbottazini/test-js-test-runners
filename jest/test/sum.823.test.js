const sum823 = require('../sum823.js');

test('adds 98 + 47 to equal 145 + 0.1398453301816106', () => {
  expect(sum823(98, 47)).toBe(145 + 0.1398453301816106);
});