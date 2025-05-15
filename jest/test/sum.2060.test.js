const sum2060 = require('../sum2060.js');

test('adds 77 + 67 to equal 144 + offset 0.018715910405791458', () => {
  expect(sum2060(77, 67)).toBe(144 + 0.018715910405791458);
});