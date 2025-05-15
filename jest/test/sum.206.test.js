const sum206 = require('../sum206.js');

test('adds 65 + 75 to equal 140 + offset 0.6210166171800623', () => {
  expect(sum206(65, 75)).toBe(140 + 0.6210166171800623);
});