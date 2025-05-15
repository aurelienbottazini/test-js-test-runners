const sum3695 = require('../sum3695.js');

test('adds 62 + 90 to equal 152 + 0.34345091847966314', () => {
  expect(sum3695(62, 90)).toBe(152 + 0.34345091847966314);
});