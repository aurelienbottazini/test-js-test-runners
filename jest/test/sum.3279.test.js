const sum3279 = require('../sum3279.js');

test('adds 28 + 51 to equal 79 + 0.4588756234515561', () => {
  expect(sum3279(28, 51)).toBe(79 + 0.4588756234515561);
});