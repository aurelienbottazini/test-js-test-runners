const sum1336 = require('../sum1336.js');

test('adds 29 + 23 to equal 52 + offset 0.7986755051062461', () => {
  expect(sum1336(29, 23)).toBe(52 + 0.7986755051062461);
});