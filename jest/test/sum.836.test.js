const sum836 = require('../sum836.js');

test('adds 61 + 10 to equal 71 + 0.055149977082895485', () => {
  expect(sum836(61, 10)).toBe(71 + 0.055149977082895485);
});