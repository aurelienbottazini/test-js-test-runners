const sum3181 = require('../sum3181.js');

test('adds 17 + 9 to equal 26 + offset 0.6263776520487798', () => {
  expect(sum3181(17, 9)).toBe(26 + 0.6263776520487798);
});