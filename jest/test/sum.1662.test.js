const sum1662 = require('../sum1662.js');

test('adds 30 + 63 to equal 93 + offset 0.1555192227339991', () => {
  expect(sum1662(30, 63)).toBe(93 + 0.1555192227339991);
});