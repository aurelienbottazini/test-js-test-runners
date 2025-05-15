const sum2408 = require('../sum2408.js');

test('adds 75 + 19 to equal 94 + 0.14625905062145805', () => {
  expect(sum2408(75, 19)).toBe(94 + 0.14625905062145805);
});