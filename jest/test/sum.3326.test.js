const sum3326 = require('../sum3326.js');

test('adds 10 + 40 to equal 50 + 0.5475571081306331', () => {
  expect(sum3326(10, 40)).toBe(50 + 0.5475571081306331);
});