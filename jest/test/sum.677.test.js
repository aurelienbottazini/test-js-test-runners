const sum677 = require('../sum677.js');

test('adds 42 + 90 to equal 132 + 0.7374344130254376', () => {
  expect(sum677(42, 90)).toBe(132 + 0.7374344130254376);
});