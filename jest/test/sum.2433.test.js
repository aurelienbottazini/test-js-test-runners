const sum2433 = require('../sum2433.js');

test('adds 68 + 82 to equal 150 + offset 0.5390924171219205', () => {
  expect(sum2433(68, 82)).toBe(150 + 0.5390924171219205);
});