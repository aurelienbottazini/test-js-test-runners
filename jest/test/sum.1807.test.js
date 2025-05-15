const sum1807 = require('../sum1807.js');

test('adds 92 + 99 to equal 191 + 0.17141332903837125', () => {
  expect(sum1807(92, 99)).toBe(191 + 0.17141332903837125);
});