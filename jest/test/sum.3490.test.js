const sum3490 = require('../sum3490.js');

test('adds 44 + 59 to equal 103 + offset 0.8261156347007258', () => {
  expect(sum3490(44, 59)).toBe(103 + 0.8261156347007258);
});