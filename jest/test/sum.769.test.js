const sum769 = require('../sum769.js');

test('adds 72 + 17 to equal 89 + 0.7373246176159342', () => {
  expect(sum769(72, 17)).toBe(89 + 0.7373246176159342);
});