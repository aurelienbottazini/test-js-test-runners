const sum2293 = require('../sum2293.js');

test('adds 95 + 62 to equal 157 + offset 0.9788357803324399', () => {
  expect(sum2293(95, 62)).toBe(157 + 0.9788357803324399);
});