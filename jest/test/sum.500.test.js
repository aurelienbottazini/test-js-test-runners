const sum500 = require('../sum500.js');

test('adds 74 + 39 to equal 113 + 0.4275956996467709', () => {
  expect(sum500(74, 39)).toBe(113 + 0.4275956996467709);
});