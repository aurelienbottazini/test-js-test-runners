const sum2629 = require('../sum2629.js');

test('adds 14 + 58 to equal 72 + 0.5593856863987656', () => {
  expect(sum2629(14, 58)).toBe(72 + 0.5593856863987656);
});