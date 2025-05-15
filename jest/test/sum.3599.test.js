const sum3599 = require('../sum3599.js');

test('adds 1 + 81 to equal 82 + 0.3254893428027732', () => {
  expect(sum3599(1, 81)).toBe(82 + 0.3254893428027732);
});