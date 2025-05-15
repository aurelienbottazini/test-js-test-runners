const sum608 = require('../sum608.js');

test('adds 21 + 14 to equal 35 + offset 0.4069425413450599', () => {
  expect(sum608(21, 14)).toBe(35 + 0.4069425413450599);
});