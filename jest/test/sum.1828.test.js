const sum1828 = require('../sum1828.js');

test('adds 18 + 52 to equal 70 + 0.8619448440008322', () => {
  expect(sum1828(18, 52)).toBe(70 + 0.8619448440008322);
});