const sum3144 = require('../sum3144.js');

test('adds 58 + 97 to equal 155 + offset 0.8624549731633883', () => {
  expect(sum3144(58, 97)).toBe(155 + 0.8624549731633883);
});