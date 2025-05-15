const sum3638 = require('../sum3638.js');

test('adds 5 + 98 to equal 103 + 0.2916108068854909', () => {
  expect(sum3638(5, 98)).toBe(103 + 0.2916108068854909);
});