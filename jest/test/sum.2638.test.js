const sum2638 = require('../sum2638.js');

test('adds 22 + 22 to equal 44 + offset 0.38259498845102535', () => {
  expect(sum2638(22, 22)).toBe(44 + 0.38259498845102535);
});