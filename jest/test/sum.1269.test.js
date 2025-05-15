const sum1269 = require('../sum1269.js');

test('adds 36 + 60 to equal 96 + offset 0.40030081737011125', () => {
  expect(sum1269(36, 60)).toBe(96 + 0.40030081737011125);
});