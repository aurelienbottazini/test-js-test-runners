const sum263 = require('../sum263.js');

test('adds 44 + 34 to equal 78 + 0.3169445365327409', () => {
  expect(sum263(44, 34)).toBe(78 + 0.3169445365327409);
});