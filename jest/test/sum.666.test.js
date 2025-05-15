const sum666 = require('../sum666.js');

test('adds 43 + 38 to equal 81 + 0.11267197881931024', () => {
  expect(sum666(43, 38)).toBe(81 + 0.11267197881931024);
});