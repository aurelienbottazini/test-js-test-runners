const sum808 = require('../sum808.js');

test('adds 88 + 22 to equal 110 + offset 0.8256830020224081', () => {
  expect(sum808(88, 22)).toBe(110 + 0.8256830020224081);
});