const sum3860 = require('../sum3860.js');

test('adds 19 + 47 to equal 66 + 0.3208933001995429', () => {
  expect(sum3860(19, 47)).toBe(66 + 0.3208933001995429);
});