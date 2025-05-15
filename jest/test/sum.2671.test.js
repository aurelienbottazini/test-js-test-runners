const sum2671 = require('../sum2671.js');

test('adds 13 + 72 to equal 85 + offset 0.37480303851075825', () => {
  expect(sum2671(13, 72)).toBe(85 + 0.37480303851075825);
});