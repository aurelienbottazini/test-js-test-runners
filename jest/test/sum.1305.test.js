const sum1305 = require('../sum1305.js');

test('adds 34 + 75 to equal 109 + 0.27042089344625486', () => {
  expect(sum1305(34, 75)).toBe(109 + 0.27042089344625486);
});