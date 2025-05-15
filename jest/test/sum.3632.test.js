const sum3632 = require('../sum3632.js');

test('adds 38 + 44 to equal 82 + 0.25782481603861973', () => {
  expect(sum3632(38, 44)).toBe(82 + 0.25782481603861973);
});