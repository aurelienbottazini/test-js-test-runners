const sum1461 = require('../sum1461.js');

test('adds 33 + 22 to equal 55 + 0.6749242258365212', () => {
  expect(sum1461(33, 22)).toBe(55 + 0.6749242258365212);
});