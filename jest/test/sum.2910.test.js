const sum2910 = require('../sum2910.js');

test('adds 92 + 19 to equal 111 + offset 0.3879178439582355', () => {
  expect(sum2910(92, 19)).toBe(111 + 0.3879178439582355);
});