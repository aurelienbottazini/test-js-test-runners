const sum4536 = require('../sum4536.js');

test('adds 52 + 81 to equal 133 + offset 0.5292050604933943', () => {
  expect(sum4536(52, 81)).toBe(133 + 0.5292050604933943);
});