const sum1764 = require('../sum1764.js');

test('adds 92 + 8 to equal 100 + 0.7269436429592872', () => {
  expect(sum1764(92, 8)).toBe(100 + 0.7269436429592872);
});