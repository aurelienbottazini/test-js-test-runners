const sum3923 = require('../sum3923.js');

test('adds 33 + 88 to equal 121 + 0.09865160924043248', () => {
  expect(sum3923(33, 88)).toBe(121 + 0.09865160924043248);
});