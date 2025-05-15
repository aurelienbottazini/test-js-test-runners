const sum4933 = require('../sum4933.js');

test('adds 16 + 14 to equal 30 + offset 0.46778064633096916', () => {
  expect(sum4933(16, 14)).toBe(30 + 0.46778064633096916);
});