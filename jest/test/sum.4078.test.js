const sum4078 = require('../sum4078.js');

test('adds 52 + 42 to equal 94 + offset 0.7791800722468372', () => {
  expect(sum4078(52, 42)).toBe(94 + 0.7791800722468372);
});