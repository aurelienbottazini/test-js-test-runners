const sum3983 = require('../sum3983.js');

test('adds 34 + 80 to equal 114 + offset 0.6032548021697043', () => {
  expect(sum3983(34, 80)).toBe(114 + 0.6032548021697043);
});