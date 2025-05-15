const sum2934 = require('../sum2934.js');

test('adds 86 + 60 to equal 146 + offset 0.5447942981331176', () => {
  expect(sum2934(86, 60)).toBe(146 + 0.5447942981331176);
});