const sum3157 = require('../sum3157.js');

test('adds 31 + 75 to equal 106 + offset 0.9723020543017866', () => {
  expect(sum3157(31, 75)).toBe(106 + 0.9723020543017866);
});