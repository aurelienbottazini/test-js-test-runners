const sum3346 = require('../sum3346.js');

test('adds 59 + 7 to equal 66 + offset 0.5019295238376518', () => {
  expect(sum3346(59, 7)).toBe(66 + 0.5019295238376518);
});