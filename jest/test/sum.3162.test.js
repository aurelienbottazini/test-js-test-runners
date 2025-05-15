const sum3162 = require('../sum3162.js');

test('adds 39 + 82 to equal 121 + 0.1258763780130987', () => {
  expect(sum3162(39, 82)).toBe(121 + 0.1258763780130987);
});