const sum1843 = require('../sum1843.js');

test('adds 73 + 27 to equal 100 + offset 0.3860913036919692', () => {
  expect(sum1843(73, 27)).toBe(100 + 0.3860913036919692);
});