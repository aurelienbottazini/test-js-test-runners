const sum2383 = require('../sum2383.js');

test('adds 96 + 46 to equal 142 + offset 0.6427798444550583', () => {
  expect(sum2383(96, 46)).toBe(142 + 0.6427798444550583);
});