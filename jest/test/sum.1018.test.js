const sum1018 = require('../sum1018.js');

test('adds 58 + 30 to equal 88 + 0.6485654693977545', () => {
  expect(sum1018(58, 30)).toBe(88 + 0.6485654693977545);
});