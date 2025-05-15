const sum3942 = require('../sum3942.js');

test('adds 23 + 16 to equal 39 + 0.3874519420095309', () => {
  expect(sum3942(23, 16)).toBe(39 + 0.3874519420095309);
});