const sum4269 = require('../sum4269.js');

test('adds 94 + 61 to equal 155 + 0.5772843360221005', () => {
  expect(sum4269(94, 61)).toBe(155 + 0.5772843360221005);
});