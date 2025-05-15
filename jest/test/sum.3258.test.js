const sum3258 = require('../sum3258.js');

test('adds 62 + 97 to equal 159 + offset 0.8881469632265437', () => {
  expect(sum3258(62, 97)).toBe(159 + 0.8881469632265437);
});