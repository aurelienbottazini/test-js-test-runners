const sum1444 = require('../sum1444.js');

test('adds 41 + 82 to equal 123 + 0.6169649534929471', () => {
  expect(sum1444(41, 82)).toBe(123 + 0.6169649534929471);
});