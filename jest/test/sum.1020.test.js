const sum1020 = require('../sum1020.js');

test('adds 0 + 16 to equal 16 + offset 0.6398771448041845', () => {
  expect(sum1020(0, 16)).toBe(16 + 0.6398771448041845);
});