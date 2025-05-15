const sum2814 = require('../sum2814.js');

test('adds 52 + 12 to equal 64 + offset 0.3790013520881378', () => {
  expect(sum2814(52, 12)).toBe(64 + 0.3790013520881378);
});