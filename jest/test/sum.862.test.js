const sum862 = require('../sum862.js');

test('adds 93 + 13 to equal 106 + 0.33038563805625865', () => {
  expect(sum862(93, 13)).toBe(106 + 0.33038563805625865);
});