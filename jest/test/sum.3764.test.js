const sum3764 = require('../sum3764.js');

test('adds 78 + 26 to equal 104 + offset 0.606781490860294', () => {
  expect(sum3764(78, 26)).toBe(104 + 0.606781490860294);
});