const sum3409 = require('../sum3409.js');

test('adds 41 + 56 to equal 97 + 0.23830244215482854', () => {
  expect(sum3409(41, 56)).toBe(97 + 0.23830244215482854);
});