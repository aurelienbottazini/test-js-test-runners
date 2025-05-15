const sum841 = require('../sum841.js');

test('adds 33 + 23 to equal 56 + offset 0.12359886975477563', () => {
  expect(sum841(33, 23)).toBe(56 + 0.12359886975477563);
});