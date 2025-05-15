const sum1127 = require('../sum1127.js');

test('adds 4 + 55 to equal 59 + offset 0.32868824261129725', () => {
  expect(sum1127(4, 55)).toBe(59 + 0.32868824261129725);
});