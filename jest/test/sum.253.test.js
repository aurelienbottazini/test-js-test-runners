const sum253 = require('../sum253.js');

test('adds 42 + 76 to equal 118 + offset 0.20018739771668037', () => {
  expect(sum253(42, 76)).toBe(118 + 0.20018739771668037);
});