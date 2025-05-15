const sum101 = require('../sum101.js');

test('adds 93 + 9 to equal 102 + offset 0.07701825104724902', () => {
  expect(sum101(93, 9)).toBe(102 + 0.07701825104724902);
});