const sum496 = require('../sum496.js');

test('adds 76 + 87 to equal 163 + 0.10111310807736129', () => {
  expect(sum496(76, 87)).toBe(163 + 0.10111310807736129);
});