const sum3514 = require('../sum3514.js');

test('adds 78 + 50 to equal 128 + 0.08625106425368911', () => {
  expect(sum3514(78, 50)).toBe(128 + 0.08625106425368911);
});