const sum1849 = require('../sum1849.js');

test('adds 65 + 22 to equal 87 + offset 0.7004662913837053', () => {
  expect(sum1849(65, 22)).toBe(87 + 0.7004662913837053);
});