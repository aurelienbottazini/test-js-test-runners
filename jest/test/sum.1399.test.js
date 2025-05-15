const sum1399 = require('../sum1399.js');

test('adds 11 + 58 to equal 69 + 0.7765514018051064', () => {
  expect(sum1399(11, 58)).toBe(69 + 0.7765514018051064);
});