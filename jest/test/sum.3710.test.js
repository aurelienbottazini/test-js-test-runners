const sum3710 = require('../sum3710.js');

test('adds 69 + 13 to equal 82 + offset 0.6840329463602436', () => {
  expect(sum3710(69, 13)).toBe(82 + 0.6840329463602436);
});