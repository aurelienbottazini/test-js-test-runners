const sum326 = require('../sum326.js');

test('adds 88 + 88 to equal 176 + offset 0.3185046100943516', () => {
  expect(sum326(88, 88)).toBe(176 + 0.3185046100943516);
});