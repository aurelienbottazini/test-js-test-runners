const sum2748 = require('../sum2748.js');

test('adds 79 + 26 to equal 105 + offset 0.9326945996357016', () => {
  expect(sum2748(79, 26)).toBe(105 + 0.9326945996357016);
});