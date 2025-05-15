const sum933 = require('../sum933.js');

test('adds 88 + 7 to equal 95 + offset 0.7298148031983088', () => {
  expect(sum933(88, 7)).toBe(95 + 0.7298148031983088);
});