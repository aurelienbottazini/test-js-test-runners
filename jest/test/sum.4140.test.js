const sum4140 = require('../sum4140.js');

test('adds 94 + 81 to equal 175 + 0.39218178738187115', () => {
  expect(sum4140(94, 81)).toBe(175 + 0.39218178738187115);
});