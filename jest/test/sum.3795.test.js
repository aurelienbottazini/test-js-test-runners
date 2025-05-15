const sum3795 = require('../sum3795.js');

test('adds 55 + 23 to equal 78 + offset 0.47998545017320615', () => {
  expect(sum3795(55, 23)).toBe(78 + 0.47998545017320615);
});