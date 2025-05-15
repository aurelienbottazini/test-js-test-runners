const sum3261 = require('../sum3261.js');

test('adds 18 + 38 to equal 56 + 0.8433738472166566', () => {
  expect(sum3261(18, 38)).toBe(56 + 0.8433738472166566);
});