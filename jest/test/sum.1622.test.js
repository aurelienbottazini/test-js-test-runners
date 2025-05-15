const sum1622 = require('../sum1622.js');

test('adds 38 + 16 to equal 54 + 0.36257208352892467', () => {
  expect(sum1622(38, 16)).toBe(54 + 0.36257208352892467);
});