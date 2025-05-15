const sum1926 = require('../sum1926.js');

test('adds 9 + 14 to equal 23 + 0.8309402354055524', () => {
  expect(sum1926(9, 14)).toBe(23 + 0.8309402354055524);
});