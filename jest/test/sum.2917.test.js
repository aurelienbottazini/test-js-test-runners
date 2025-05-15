const sum2917 = require('../sum2917.js');

test('adds 28 + 88 to equal 116 + offset 0.652302509488901', () => {
  expect(sum2917(28, 88)).toBe(116 + 0.652302509488901);
});