const sum1917 = require('../sum1917.js');

test('adds 22 + 85 to equal 107 + offset 0.37665492452913574', () => {
  expect(sum1917(22, 85)).toBe(107 + 0.37665492452913574);
});