const sum662 = require('../sum662.js');

test('adds 73 + 50 to equal 123 + offset 0.6408367894389916', () => {
  expect(sum662(73, 50)).toBe(123 + 0.6408367894389916);
});