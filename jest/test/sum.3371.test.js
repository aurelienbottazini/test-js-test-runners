const sum3371 = require('../sum3371.js');

test('adds 83 + 74 to equal 157 + offset 0.5661693774599772', () => {
  expect(sum3371(83, 74)).toBe(157 + 0.5661693774599772);
});