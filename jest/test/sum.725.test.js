const sum725 = require('../sum725.js');

test('adds 20 + 95 to equal 115 + offset 0.799814862876731', () => {
  expect(sum725(20, 95)).toBe(115 + 0.799814862876731);
});