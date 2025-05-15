const sum3354 = require('../sum3354.js');

test('adds 58 + 20 to equal 78 + offset 0.12902194437539316', () => {
  expect(sum3354(58, 20)).toBe(78 + 0.12902194437539316);
});