const sum4877 = require('../sum4877.js');

test('adds 3 + 84 to equal 87 + 0.244664661225235', () => {
  expect(sum4877(3, 84)).toBe(87 + 0.244664661225235);
});