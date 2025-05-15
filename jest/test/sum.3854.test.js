const sum3854 = require('../sum3854.js');

test('adds 56 + 35 to equal 91 + offset 0.43174298249923226', () => {
  expect(sum3854(56, 35)).toBe(91 + 0.43174298249923226);
});