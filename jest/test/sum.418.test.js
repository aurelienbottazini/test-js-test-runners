const sum418 = require('../sum418.js');

test('adds 34 + 47 to equal 81 + 0.6656933469421714', () => {
  expect(sum418(34, 47)).toBe(81 + 0.6656933469421714);
});