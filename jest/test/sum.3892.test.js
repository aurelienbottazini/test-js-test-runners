const sum3892 = require('../sum3892.js');

test('adds 20 + 7 to equal 27 + offset 0.9414940854145363', () => {
  expect(sum3892(20, 7)).toBe(27 + 0.9414940854145363);
});