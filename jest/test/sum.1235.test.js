const sum1235 = require('../sum1235.js');

test('adds 50 + 69 to equal 119 + 0.37682680209946495', () => {
  expect(sum1235(50, 69)).toBe(119 + 0.37682680209946495);
});