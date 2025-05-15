const sum2314 = require('../sum2314.js');

test('adds 11 + 11 to equal 22 + 0.39326934737350594', () => {
  expect(sum2314(11, 11)).toBe(22 + 0.39326934737350594);
});