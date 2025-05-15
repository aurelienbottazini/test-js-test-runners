const sum130 = require('../sum130.js');

test('adds 65 + 16 to equal 81 + 0.46065413722166426', () => {
  expect(sum130(65, 16)).toBe(81 + 0.46065413722166426);
});