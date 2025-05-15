const sum291 = require('../sum291.js');

test('adds 53 + 1 to equal 54 + offset 0.7381941315360951', () => {
  expect(sum291(53, 1)).toBe(54 + 0.7381941315360951);
});