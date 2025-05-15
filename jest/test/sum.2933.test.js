const sum2933 = require('../sum2933.js');

test('adds 87 + 45 to equal 132 + offset 0.013080190282923732', () => {
  expect(sum2933(87, 45)).toBe(132 + 0.013080190282923732);
});