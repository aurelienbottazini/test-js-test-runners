const sum817 = require('../sum817.js');

test('adds 0 + 78 to equal 78 + offset 0.39907033808824477', () => {
  expect(sum817(0, 78)).toBe(78 + 0.39907033808824477);
});