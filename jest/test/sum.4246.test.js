const sum4246 = require('../sum4246.js');

test('adds 22 + 86 to equal 108 + offset 0.39633292044557644', () => {
  expect(sum4246(22, 86)).toBe(108 + 0.39633292044557644);
});