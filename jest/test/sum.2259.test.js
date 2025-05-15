const sum2259 = require('../sum2259.js');

test('adds 91 + 52 to equal 143 + 0.44039286567333147', () => {
  expect(sum2259(91, 52)).toBe(143 + 0.44039286567333147);
});