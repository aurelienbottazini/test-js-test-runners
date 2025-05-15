const sum276 = require('../sum276.js');

test('adds 56 + 28 to equal 84 + 0.9815430799609207', () => {
  expect(sum276(56, 28)).toBe(84 + 0.9815430799609207);
});