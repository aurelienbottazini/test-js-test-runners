const sum3316 = require('../sum3316.js');

test('adds 83 + 75 to equal 158 + offset 0.16824749084973878', () => {
  expect(sum3316(83, 75)).toBe(158 + 0.16824749084973878);
});