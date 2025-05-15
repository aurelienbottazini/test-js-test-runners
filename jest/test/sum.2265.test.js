const sum2265 = require('../sum2265.js');

test('adds 19 + 40 to equal 59 + offset 0.7935015650673195', () => {
  expect(sum2265(19, 40)).toBe(59 + 0.7935015650673195);
});