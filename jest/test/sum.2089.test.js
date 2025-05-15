const sum2089 = require('../sum2089.js');

test('adds 53 + 67 to equal 120 + offset 0.6305014551700142', () => {
  expect(sum2089(53, 67)).toBe(120 + 0.6305014551700142);
});