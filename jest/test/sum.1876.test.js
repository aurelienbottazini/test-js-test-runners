const sum1876 = require('../sum1876.js');

test('adds 5 + 18 to equal 23 + offset 0.22737015421513795', () => {
  expect(sum1876(5, 18)).toBe(23 + 0.22737015421513795);
});