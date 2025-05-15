const sum2071 = require('../sum2071.js');

test('adds 74 + 64 to equal 138 + 0.19640745613139154', () => {
  expect(sum2071(74, 64)).toBe(138 + 0.19640745613139154);
});