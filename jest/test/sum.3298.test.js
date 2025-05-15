const sum3298 = require('../sum3298.js');

test('adds 82 + 82 to equal 164 + offset 0.2853246071206146', () => {
  expect(sum3298(82, 82)).toBe(164 + 0.2853246071206146);
});