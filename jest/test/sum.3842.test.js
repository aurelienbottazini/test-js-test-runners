const sum3842 = require('../sum3842.js');

test('adds 96 + 52 to equal 148 + offset 0.7978479557460523', () => {
  expect(sum3842(96, 52)).toBe(148 + 0.7978479557460523);
});