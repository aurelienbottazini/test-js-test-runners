const sum3912 = require('../sum3912.js');

test('adds 15 + 18 to equal 33 + 0.7661748919521616', () => {
  expect(sum3912(15, 18)).toBe(33 + 0.7661748919521616);
});