const sum1819 = require('../sum1819.js');

test('adds 66 + 16 to equal 82 + offset 0.5820524799014026', () => {
  expect(sum1819(66, 16)).toBe(82 + 0.5820524799014026);
});