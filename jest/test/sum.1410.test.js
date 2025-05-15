const sum1410 = require('../sum1410.js');

test('adds 32 + 11 to equal 43 + 0.9821568387410389', () => {
  expect(sum1410(32, 11)).toBe(43 + 0.9821568387410389);
});