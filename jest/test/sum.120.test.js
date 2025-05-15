const sum120 = require('../sum120.js');

test('adds 51 + 25 to equal 76 + 0.922730702939254', () => {
  expect(sum120(51, 25)).toBe(76 + 0.922730702939254);
});