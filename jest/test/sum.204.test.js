const sum204 = require('../sum204.js');

test('adds 32 + 38 to equal 70 + offset 0.17580915832889843', () => {
  expect(sum204(32, 38)).toBe(70 + 0.17580915832889843);
});