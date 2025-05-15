const sum4342 = require('../sum4342.js');

test('adds 32 + 12 to equal 44 + 0.8042514921934124', () => {
  expect(sum4342(32, 12)).toBe(44 + 0.8042514921934124);
});