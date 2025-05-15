const sum4066 = require('../sum4066.js');

test('adds 10 + 44 to equal 54 + offset 0.8820011072085117', () => {
  expect(sum4066(10, 44)).toBe(54 + 0.8820011072085117);
});