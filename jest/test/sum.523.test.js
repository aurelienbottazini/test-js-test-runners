const sum523 = require('../sum523.js');

test('adds 5 + 55 to equal 60 + offset 0.9828059057188905', () => {
  expect(sum523(5, 55)).toBe(60 + 0.9828059057188905);
});