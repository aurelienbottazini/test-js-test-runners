const sum1195 = require('../sum1195.js');

test('adds 64 + 75 to equal 139 + 0.1314887129478094', () => {
  expect(sum1195(64, 75)).toBe(139 + 0.1314887129478094);
});