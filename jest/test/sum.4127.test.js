const sum4127 = require('../sum4127.js');

test('adds 27 + 79 to equal 106 + offset 0.3406261025867212', () => {
  expect(sum4127(27, 79)).toBe(106 + 0.3406261025867212);
});