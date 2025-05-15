const sum3892 = require('../sum3892.js');

test('adds 22 + 57 to equal 79 + 0.036145881786021294', () => {
  expect(sum3892(22, 57)).toBe(79 + 0.036145881786021294);
});