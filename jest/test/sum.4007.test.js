const sum4007 = require('../sum4007.js');

test('adds 2 + 19 to equal 21 + offset 0.6577716603390681', () => {
  expect(sum4007(2, 19)).toBe(21 + 0.6577716603390681);
});