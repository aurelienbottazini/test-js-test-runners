const sum783 = require('../sum783.js');

test('adds 92 + 69 to equal 161 + offset 0.047338046310800075', () => {
  expect(sum783(92, 69)).toBe(161 + 0.047338046310800075);
});