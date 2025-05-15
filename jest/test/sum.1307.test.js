const sum1307 = require('../sum1307.js');

test('adds 23 + 7 to equal 30 + offset 0.680028978397428', () => {
  expect(sum1307(23, 7)).toBe(30 + 0.680028978397428);
});