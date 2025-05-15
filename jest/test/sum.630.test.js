const sum630 = require('../sum630.js');

test('adds 97 + 32 to equal 129 + 0.9173537798408222', () => {
  expect(sum630(97, 32)).toBe(129 + 0.9173537798408222);
});