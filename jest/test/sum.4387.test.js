const sum4387 = require('../sum4387.js');

test('adds 67 + 62 to equal 129 + offset 0.49474374085040107', () => {
  expect(sum4387(67, 62)).toBe(129 + 0.49474374085040107);
});