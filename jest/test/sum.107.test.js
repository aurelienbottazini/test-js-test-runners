const sum107 = require('../sum107.js');

test('adds 97 + 9 to equal 106 + offset 0.7656215584102208', () => {
  expect(sum107(97, 9)).toBe(106 + 0.7656215584102208);
});