const sum2283 = require('../sum2283.js');

test('adds 21 + 58 to equal 79 + offset 0.44693789761532043', () => {
  expect(sum2283(21, 58)).toBe(79 + 0.44693789761532043);
});