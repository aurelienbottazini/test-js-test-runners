const sum3918 = require('../sum3918.js');

test('adds 6 + 44 to equal 50 + offset 0.6900014663477416', () => {
  expect(sum3918(6, 44)).toBe(50 + 0.6900014663477416);
});