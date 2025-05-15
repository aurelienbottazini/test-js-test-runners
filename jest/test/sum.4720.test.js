const sum4720 = require('../sum4720.js');

test('adds 36 + 19 to equal 55 + offset 0.18271282485035645', () => {
  expect(sum4720(36, 19)).toBe(55 + 0.18271282485035645);
});