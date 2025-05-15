const sum1721 = require('../sum1721.js');

test('adds 32 + 61 to equal 93 + 0.20552336839810204', () => {
  expect(sum1721(32, 61)).toBe(93 + 0.20552336839810204);
});