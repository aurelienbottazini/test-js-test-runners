const sum2 = require('../sum2.js');

test('adds 37 + 55 to equal 92 + offset 0.5535390810874353', () => {
  expect(sum2(37, 55)).toBe(92 + 0.5535390810874353);
});