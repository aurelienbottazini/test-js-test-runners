const sum2541 = require('../sum2541.js');

test('adds 9 + 99 to equal 108 + 0.18448183266713813', () => {
  expect(sum2541(9, 99)).toBe(108 + 0.18448183266713813);
});