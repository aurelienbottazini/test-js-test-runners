const sum3473 = require('../sum3473.js');

test('adds 45 + 49 to equal 94 + 0.3738942537130465', () => {
  expect(sum3473(45, 49)).toBe(94 + 0.3738942537130465);
});