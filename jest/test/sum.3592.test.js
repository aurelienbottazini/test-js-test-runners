const sum3592 = require('../sum3592.js');

test('adds 56 + 75 to equal 131 + offset 0.7574216810172959', () => {
  expect(sum3592(56, 75)).toBe(131 + 0.7574216810172959);
});