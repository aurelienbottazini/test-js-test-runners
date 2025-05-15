const sum1844 = require('../sum1844.js');

test('adds 92 + 52 to equal 144 + offset 0.6252493624276306', () => {
  expect(sum1844(92, 52)).toBe(144 + 0.6252493624276306);
});