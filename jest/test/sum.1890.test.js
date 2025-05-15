const sum1890 = require('../sum1890.js');

test('adds 23 + 85 to equal 108 + 0.40882975251197606', () => {
  expect(sum1890(23, 85)).toBe(108 + 0.40882975251197606);
});