const sum4236 = require('../sum4236.js');

test('adds 25 + 68 to equal 93 + offset 0.46883435081878866', () => {
  expect(sum4236(25, 68)).toBe(93 + 0.46883435081878866);
});