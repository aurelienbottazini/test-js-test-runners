const sum468 = require('../sum468.js');

test('adds 4 + 32 to equal 36 + 0.39900389272271564', () => {
  expect(sum468(4, 32)).toBe(36 + 0.39900389272271564);
});