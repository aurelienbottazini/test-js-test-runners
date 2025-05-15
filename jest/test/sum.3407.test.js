const sum3407 = require('../sum3407.js');

test('adds 61 + 79 to equal 140 + offset 0.013100306532914718', () => {
  expect(sum3407(61, 79)).toBe(140 + 0.013100306532914718);
});