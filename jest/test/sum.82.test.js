const sum82 = require('../sum82.js');

test('adds 62 + 5 to equal 67 + offset 0.3973916509448495', () => {
  expect(sum82(62, 5)).toBe(67 + 0.3973916509448495);
});