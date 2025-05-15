const sum1536 = require('../sum1536.js');

test('adds 32 + 49 to equal 81 + 0.06369069090010171', () => {
  expect(sum1536(32, 49)).toBe(81 + 0.06369069090010171);
});