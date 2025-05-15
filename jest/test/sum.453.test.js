const sum453 = require('../sum453.js');

test('adds 8 + 15 to equal 23 + offset 0.5760609660453442', () => {
  expect(sum453(8, 15)).toBe(23 + 0.5760609660453442);
});