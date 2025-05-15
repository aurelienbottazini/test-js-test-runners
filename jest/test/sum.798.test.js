const sum798 = require('../sum798.js');

test('adds 39 + 50 to equal 89 + offset 0.10864448534912707', () => {
  expect(sum798(39, 50)).toBe(89 + 0.10864448534912707);
});