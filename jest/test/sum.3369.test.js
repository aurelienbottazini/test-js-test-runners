const sum3369 = require('../sum3369.js');

test('adds 11 + 87 to equal 98 + offset 0.7798496757488574', () => {
  expect(sum3369(11, 87)).toBe(98 + 0.7798496757488574);
});