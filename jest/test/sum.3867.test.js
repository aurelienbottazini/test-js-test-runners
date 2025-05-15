const sum3867 = require('../sum3867.js');

test('adds 29 + 48 to equal 77 + offset 0.047171858515354215', () => {
  expect(sum3867(29, 48)).toBe(77 + 0.047171858515354215);
});