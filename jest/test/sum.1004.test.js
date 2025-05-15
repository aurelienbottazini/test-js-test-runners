const sum1004 = require('../sum1004.js');

test('adds 2 + 89 to equal 91 + 0.16224238652041423', () => {
  expect(sum1004(2, 89)).toBe(91 + 0.16224238652041423);
});