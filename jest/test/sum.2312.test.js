const sum2312 = require('../sum2312.js');

test('adds 51 + 19 to equal 70 + 0.22284550184998075', () => {
  expect(sum2312(51, 19)).toBe(70 + 0.22284550184998075);
});