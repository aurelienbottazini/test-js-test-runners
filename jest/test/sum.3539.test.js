const sum3539 = require('../sum3539.js');

test('adds 19 + 84 to equal 103 + 0.15758583605788168', () => {
  expect(sum3539(19, 84)).toBe(103 + 0.15758583605788168);
});