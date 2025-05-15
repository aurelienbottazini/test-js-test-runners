const sum4490 = require('../sum4490.js');

test('adds 54 + 94 to equal 148 + offset 0.13867668539583078', () => {
  expect(sum4490(54, 94)).toBe(148 + 0.13867668539583078);
});