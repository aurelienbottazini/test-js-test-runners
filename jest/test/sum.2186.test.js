const sum2186 = require('../sum2186.js');

test('adds 53 + 36 to equal 89 + 0.3385949745613108', () => {
  expect(sum2186(53, 36)).toBe(89 + 0.3385949745613108);
});