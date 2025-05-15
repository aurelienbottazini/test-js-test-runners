const sum704 = require('../sum704.js');

test('adds 34 + 48 to equal 82 + offset 0.014230626883627306', () => {
  expect(sum704(34, 48)).toBe(82 + 0.014230626883627306);
});