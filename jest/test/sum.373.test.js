const sum373 = require('../sum373.js');

test('adds 31 + 84 to equal 115 + offset 0.07909948510639131', () => {
  expect(sum373(31, 84)).toBe(115 + 0.07909948510639131);
});