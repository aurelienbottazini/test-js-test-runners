const sum1525 = require('../sum1525.js');

test('adds 13 + 89 to equal 102 + offset 0.36512703932710844', () => {
  expect(sum1525(13, 89)).toBe(102 + 0.36512703932710844);
});