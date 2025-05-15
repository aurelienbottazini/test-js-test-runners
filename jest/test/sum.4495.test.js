const sum4495 = require('../sum4495.js');

test('adds 38 + 89 to equal 127 + 0.12066407145309355', () => {
  expect(sum4495(38, 89)).toBe(127 + 0.12066407145309355);
});