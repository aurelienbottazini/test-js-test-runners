const sum3646 = require('../sum3646.js');

test('adds 19 + 25 to equal 44 + offset 0.6110521466542848', () => {
  expect(sum3646(19, 25)).toBe(44 + 0.6110521466542848);
});