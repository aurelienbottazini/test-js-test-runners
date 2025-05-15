const sum127 = require('../sum127.js');

test('adds 45 + 22 to equal 67 + 0.8886599130991214', () => {
  expect(sum127(45, 22)).toBe(67 + 0.8886599130991214);
});