const sum3490 = require('../sum3490.js');

test('adds 14 + 28 to equal 42 + 0.6410619952004463', () => {
  expect(sum3490(14, 28)).toBe(42 + 0.6410619952004463);
});