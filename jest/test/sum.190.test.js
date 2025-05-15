const sum190 = require('../sum190.js');

test('adds 4 + 95 to equal 99 + 0.9789563433658784', () => {
  expect(sum190(4, 95)).toBe(99 + 0.9789563433658784);
});