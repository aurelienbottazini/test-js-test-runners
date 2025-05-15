const sum1656 = require('../sum1656.js');

test('adds 91 + 67 to equal 158 + 0.8082380928371657', () => {
  expect(sum1656(91, 67)).toBe(158 + 0.8082380928371657);
});