const sum889 = require('../sum889.js');

test('adds 78 + 60 to equal 138 + offset 0.14985232946678329', () => {
  expect(sum889(78, 60)).toBe(138 + 0.14985232946678329);
});