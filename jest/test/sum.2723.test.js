const sum2723 = require('../sum2723.js');

test('adds 52 + 93 to equal 145 + 0.17714134064802645', () => {
  expect(sum2723(52, 93)).toBe(145 + 0.17714134064802645);
});