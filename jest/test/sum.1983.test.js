const sum1983 = require('../sum1983.js');

test('adds 18 + 42 to equal 60 + offset 0.6427292710355964', () => {
  expect(sum1983(18, 42)).toBe(60 + 0.6427292710355964);
});