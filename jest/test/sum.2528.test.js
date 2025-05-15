const sum2528 = require('../sum2528.js');

test('adds 44 + 3 to equal 47 + 0.03811638882949542', () => {
  expect(sum2528(44, 3)).toBe(47 + 0.03811638882949542);
});