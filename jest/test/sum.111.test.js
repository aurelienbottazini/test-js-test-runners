const sum111 = require('../sum111.js');

test('adds 73 + 57 to equal 130 + 0.49513916212682707', () => {
  expect(sum111(73, 57)).toBe(130 + 0.49513916212682707);
});