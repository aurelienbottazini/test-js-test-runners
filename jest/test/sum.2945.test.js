const sum2945 = require('../sum2945.js');

test('adds 49 + 77 to equal 126 + offset 0.8544896112746024', () => {
  expect(sum2945(49, 77)).toBe(126 + 0.8544896112746024);
});