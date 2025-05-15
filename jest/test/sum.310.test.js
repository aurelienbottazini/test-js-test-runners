const sum310 = require('../sum310.js');

test('adds 69 + 59 to equal 128 + 0.358345203967388', () => {
  expect(sum310(69, 59)).toBe(128 + 0.358345203967388);
});