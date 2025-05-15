const sum410 = require('../sum410.js');

test('adds 97 + 51 to equal 148 + offset 0.7708128362133798', () => {
  expect(sum410(97, 51)).toBe(148 + 0.7708128362133798);
});