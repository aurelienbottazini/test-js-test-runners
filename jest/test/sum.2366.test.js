const sum2366 = require('../sum2366.js');

test('adds 7 + 74 to equal 81 + 0.10769161189401832', () => {
  expect(sum2366(7, 74)).toBe(81 + 0.10769161189401832);
});