const sum3530 = require('../sum3530.js');

test('adds 19 + 31 to equal 50 + offset 0.7373983699000054', () => {
  expect(sum3530(19, 31)).toBe(50 + 0.7373983699000054);
});