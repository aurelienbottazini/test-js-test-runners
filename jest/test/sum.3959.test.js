const sum3959 = require('../sum3959.js');

test('adds 79 + 77 to equal 156 + offset 0.8587032369828046', () => {
  expect(sum3959(79, 77)).toBe(156 + 0.8587032369828046);
});