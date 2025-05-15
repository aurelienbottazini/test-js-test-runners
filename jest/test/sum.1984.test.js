const sum1984 = require('../sum1984.js');

test('adds 32 + 79 to equal 111 + 0.5052086232414648', () => {
  expect(sum1984(32, 79)).toBe(111 + 0.5052086232414648);
});