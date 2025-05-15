const sum1069 = require('../sum1069.js');

test('adds 91 + 64 to equal 155 + 0.5397268255385009', () => {
  expect(sum1069(91, 64)).toBe(155 + 0.5397268255385009);
});