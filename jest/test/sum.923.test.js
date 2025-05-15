const sum923 = require('../sum923.js');

test('adds 58 + 53 to equal 111 + offset 0.06985128537108753', () => {
  expect(sum923(58, 53)).toBe(111 + 0.06985128537108753);
});