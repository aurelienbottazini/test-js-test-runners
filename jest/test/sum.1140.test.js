const sum1140 = require('../sum1140.js');

test('adds 41 + 33 to equal 74 + 0.5722659446669678', () => {
  expect(sum1140(41, 33)).toBe(74 + 0.5722659446669678);
});