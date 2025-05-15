const sum2434 = require('../sum2434.js');

test('adds 93 + 83 to equal 176 + offset 0.45039478348727857', () => {
  expect(sum2434(93, 83)).toBe(176 + 0.45039478348727857);
});