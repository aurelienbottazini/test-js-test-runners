const sum1202 = require('../sum1202.js');

test('adds 74 + 27 to equal 101 + 0.6531615693655108', () => {
  expect(sum1202(74, 27)).toBe(101 + 0.6531615693655108);
});