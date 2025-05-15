const sum3963 = require('../sum3963.js');

test('adds 31 + 68 to equal 99 + 0.8298304279512737', () => {
  expect(sum3963(31, 68)).toBe(99 + 0.8298304279512737);
});