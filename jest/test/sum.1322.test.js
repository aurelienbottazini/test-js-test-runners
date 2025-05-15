const sum1322 = require('../sum1322.js');

test('adds 50 + 54 to equal 104 + offset 0.3890159873730017', () => {
  expect(sum1322(50, 54)).toBe(104 + 0.3890159873730017);
});