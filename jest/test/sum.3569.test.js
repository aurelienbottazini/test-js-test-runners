const sum3569 = require('../sum3569.js');

test('adds 38 + 93 to equal 131 + offset 0.9497540444724378', () => {
  expect(sum3569(38, 93)).toBe(131 + 0.9497540444724378);
});