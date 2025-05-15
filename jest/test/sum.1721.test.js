const sum1721 = require('../sum1721.js');

test('adds 8 + 90 to equal 98 + offset 0.8404149021860567', () => {
  expect(sum1721(8, 90)).toBe(98 + 0.8404149021860567);
});