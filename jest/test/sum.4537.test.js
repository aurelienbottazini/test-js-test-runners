const sum4537 = require('../sum4537.js');

test('adds 7 + 32 to equal 39 + offset 0.7119064259675093', () => {
  expect(sum4537(7, 32)).toBe(39 + 0.7119064259675093);
});