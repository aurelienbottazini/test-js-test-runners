const sum3578 = require('../sum3578.js');

test('adds 50 + 77 to equal 127 + 0.7758703830974504', () => {
  expect(sum3578(50, 77)).toBe(127 + 0.7758703830974504);
});