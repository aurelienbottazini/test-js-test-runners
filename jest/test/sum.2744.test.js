const sum2744 = require('../sum2744.js');

test('adds 40 + 40 to equal 80 + offset 0.8204663825576717', () => {
  expect(sum2744(40, 40)).toBe(80 + 0.8204663825576717);
});