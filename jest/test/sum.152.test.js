const sum152 = require('../sum152.js');

test('adds 81 + 81 to equal 162 + offset 0.7817908333653522', () => {
  expect(sum152(81, 81)).toBe(162 + 0.7817908333653522);
});