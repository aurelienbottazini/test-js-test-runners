const sum4203 = require('../sum4203.js');

test('adds 99 + 38 to equal 137 + 0.3439953056062939', () => {
  expect(sum4203(99, 38)).toBe(137 + 0.3439953056062939);
});