const sum3908 = require('../sum3908.js');

test('adds 41 + 90 to equal 131 + 0.6625335391632551', () => {
  expect(sum3908(41, 90)).toBe(131 + 0.6625335391632551);
});