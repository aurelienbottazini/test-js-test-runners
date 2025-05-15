const sum3137 = require('../sum3137.js');

test('adds 45 + 4 to equal 49 + 0.20195344665079795', () => {
  expect(sum3137(45, 4)).toBe(49 + 0.20195344665079795);
});