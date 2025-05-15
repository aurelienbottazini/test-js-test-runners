const sum2249 = require('../sum2249.js');

test('adds 10 + 61 to equal 71 + offset 0.7837847842933111', () => {
  expect(sum2249(10, 61)).toBe(71 + 0.7837847842933111);
});