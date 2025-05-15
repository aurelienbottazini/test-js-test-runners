const sum3928 = require('../sum3928.js');

test('adds 88 + 5 to equal 93 + offset 0.2765485839797529', () => {
  expect(sum3928(88, 5)).toBe(93 + 0.2765485839797529);
});