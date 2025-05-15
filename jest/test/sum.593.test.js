const sum593 = require('../sum593.js');

test('adds 39 + 93 to equal 132 + offset 0.9389880176268954', () => {
  expect(sum593(39, 93)).toBe(132 + 0.9389880176268954);
});