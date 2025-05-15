const sum3143 = require('../sum3143.js');

test('adds 18 + 93 to equal 111 + offset 0.34803647955212413', () => {
  expect(sum3143(18, 93)).toBe(111 + 0.34803647955212413);
});