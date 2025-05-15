const sum3585 = require('../sum3585.js');

test('adds 41 + 67 to equal 108 + 0.32917768638884604', () => {
  expect(sum3585(41, 67)).toBe(108 + 0.32917768638884604);
});