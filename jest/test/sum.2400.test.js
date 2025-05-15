const sum2400 = require('../sum2400.js');

test('adds 50 + 49 to equal 99 + 0.5098103869571536', () => {
  expect(sum2400(50, 49)).toBe(99 + 0.5098103869571536);
});