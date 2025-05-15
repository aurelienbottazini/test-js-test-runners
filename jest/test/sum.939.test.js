const sum939 = require('../sum939.js');

test('adds 61 + 73 to equal 134 + 0.49047712815573863', () => {
  expect(sum939(61, 73)).toBe(134 + 0.49047712815573863);
});