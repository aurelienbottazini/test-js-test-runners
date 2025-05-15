const sum3246 = require('../sum3246.js');

test('adds 4 + 96 to equal 100 + 0.5215149492993665', () => {
  expect(sum3246(4, 96)).toBe(100 + 0.5215149492993665);
});