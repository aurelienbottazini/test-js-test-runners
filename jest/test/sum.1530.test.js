const sum1530 = require('../sum1530.js');

test('adds 2 + 9 to equal 11 + 0.1381466679704213', () => {
  expect(sum1530(2, 9)).toBe(11 + 0.1381466679704213);
});