const sum4783 = require('../sum4783.js');

test('adds 38 + 19 to equal 57 + offset 0.3549846461492201', () => {
  expect(sum4783(38, 19)).toBe(57 + 0.3549846461492201);
});