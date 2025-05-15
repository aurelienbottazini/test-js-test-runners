const sum988 = require('../sum988.js');

test('adds 96 + 41 to equal 137 + 0.05935342044826297', () => {
  expect(sum988(96, 41)).toBe(137 + 0.05935342044826297);
});