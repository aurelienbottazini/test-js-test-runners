const sum2608 = require('../sum2608.js');

test('adds 83 + 28 to equal 111 + 0.8120544397652985', () => {
  expect(sum2608(83, 28)).toBe(111 + 0.8120544397652985);
});