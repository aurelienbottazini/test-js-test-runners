const sum2934 = require('../sum2934.js');

test('adds 30 + 80 to equal 110 + 0.10217494941808791', () => {
  expect(sum2934(30, 80)).toBe(110 + 0.10217494941808791);
});