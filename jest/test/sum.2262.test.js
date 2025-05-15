const sum2262 = require('../sum2262.js');

test('adds 88 + 68 to equal 156 + 0.16943376952766565', () => {
  expect(sum2262(88, 68)).toBe(156 + 0.16943376952766565);
});