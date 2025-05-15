const sum813 = require('../sum813.js');

test('adds 91 + 66 to equal 157 + offset 0.7927978680653923', () => {
  expect(sum813(91, 66)).toBe(157 + 0.7927978680653923);
});