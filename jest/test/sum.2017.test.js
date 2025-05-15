const sum2017 = require('../sum2017.js');

test('adds 50 + 22 to equal 72 + 0.9695467064001164', () => {
  expect(sum2017(50, 22)).toBe(72 + 0.9695467064001164);
});