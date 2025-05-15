const sum2442 = require('../sum2442.js');

test('adds 93 + 33 to equal 126 + offset 0.38937101083797643', () => {
  expect(sum2442(93, 33)).toBe(126 + 0.38937101083797643);
});