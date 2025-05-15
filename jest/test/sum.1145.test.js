const sum1145 = require('../sum1145.js');

test('adds 44 + 65 to equal 109 + 0.9154045817468329', () => {
  expect(sum1145(44, 65)).toBe(109 + 0.9154045817468329);
});