const sum2594 = require('../sum2594.js');

test('adds 75 + 82 to equal 157 + offset 0.22408117776360326', () => {
  expect(sum2594(75, 82)).toBe(157 + 0.22408117776360326);
});