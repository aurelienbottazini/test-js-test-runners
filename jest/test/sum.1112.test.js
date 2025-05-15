const sum1112 = require('../sum1112.js');

test('adds 79 + 8 to equal 87 + 0.3821391754933723', () => {
  expect(sum1112(79, 8)).toBe(87 + 0.3821391754933723);
});