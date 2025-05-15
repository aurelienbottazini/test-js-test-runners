const sum1933 = require('../sum1933.js');

test('adds 37 + 92 to equal 129 + 0.13164123029594732', () => {
  expect(sum1933(37, 92)).toBe(129 + 0.13164123029594732);
});