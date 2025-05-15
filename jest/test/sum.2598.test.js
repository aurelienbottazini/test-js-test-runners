const sum2598 = require('../sum2598.js');

test('adds 13 + 59 to equal 72 + 0.7834562598286923', () => {
  expect(sum2598(13, 59)).toBe(72 + 0.7834562598286923);
});