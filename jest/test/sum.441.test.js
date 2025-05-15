const sum441 = require('../sum441.js');

test('adds 41 + 56 to equal 97 + 0.09176539574433107', () => {
  expect(sum441(41, 56)).toBe(97 + 0.09176539574433107);
});