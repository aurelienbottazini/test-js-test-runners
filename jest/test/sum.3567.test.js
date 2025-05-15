const sum3567 = require('../sum3567.js');

test('adds 85 + 27 to equal 112 + offset 0.5004295253322391', () => {
  expect(sum3567(85, 27)).toBe(112 + 0.5004295253322391);
});