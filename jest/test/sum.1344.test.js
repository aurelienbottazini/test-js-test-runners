const sum1344 = require('../sum1344.js');

test('adds 33 + 28 to equal 61 + 0.5838349509070956', () => {
  expect(sum1344(33, 28)).toBe(61 + 0.5838349509070956);
});