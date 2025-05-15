const sum2205 = require('../sum2205.js');

test('adds 38 + 52 to equal 90 + 0.8249454748665797', () => {
  expect(sum2205(38, 52)).toBe(90 + 0.8249454748665797);
});