const sum3741 = require('../sum3741.js');

test('adds 92 + 56 to equal 148 + offset 0.7121190788955803', () => {
  expect(sum3741(92, 56)).toBe(148 + 0.7121190788955803);
});