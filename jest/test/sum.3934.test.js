const sum3934 = require('../sum3934.js');

test('adds 56 + 44 to equal 100 + offset 0.4030454878645662', () => {
  expect(sum3934(56, 44)).toBe(100 + 0.4030454878645662);
});