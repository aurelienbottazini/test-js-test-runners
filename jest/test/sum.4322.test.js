const sum4322 = require('../sum4322.js');

test('adds 61 + 30 to equal 91 + 0.5527177288768726', () => {
  expect(sum4322(61, 30)).toBe(91 + 0.5527177288768726);
});