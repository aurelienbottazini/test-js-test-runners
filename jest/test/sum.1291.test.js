const sum1291 = require('../sum1291.js');

test('adds 77 + 20 to equal 97 + 0.14472208211509874', () => {
  expect(sum1291(77, 20)).toBe(97 + 0.14472208211509874);
});