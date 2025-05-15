const sum3514 = require('../sum3514.js');

test('adds 48 + 34 to equal 82 + offset 0.7749832744735455', () => {
  expect(sum3514(48, 34)).toBe(82 + 0.7749832744735455);
});