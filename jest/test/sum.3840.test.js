const sum3840 = require('../sum3840.js');

test('adds 70 + 89 to equal 159 + offset 0.15360062858115586', () => {
  expect(sum3840(70, 89)).toBe(159 + 0.15360062858115586);
});