const sum3263 = require('../sum3263.js');

test('adds 58 + 53 to equal 111 + offset 0.5396621920550896', () => {
  expect(sum3263(58, 53)).toBe(111 + 0.5396621920550896);
});