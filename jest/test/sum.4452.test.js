const sum4452 = require('../sum4452.js');

test('adds 99 + 89 to equal 188 + 0.15939094966576972', () => {
  expect(sum4452(99, 89)).toBe(188 + 0.15939094966576972);
});