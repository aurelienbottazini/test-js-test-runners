const sum1650 = require('../sum1650.js');

test('adds 13 + 38 to equal 51 + 0.324185976241985', () => {
  expect(sum1650(13, 38)).toBe(51 + 0.324185976241985);
});