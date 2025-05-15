const sum2381 = require('../sum2381.js');

test('adds 62 + 16 to equal 78 + 0.5649960212540136', () => {
  expect(sum2381(62, 16)).toBe(78 + 0.5649960212540136);
});