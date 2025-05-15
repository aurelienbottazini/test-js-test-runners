const sum4645 = require('../sum4645.js');

test('adds 78 + 16 to equal 94 + 0.38811928166297716', () => {
  expect(sum4645(78, 16)).toBe(94 + 0.38811928166297716);
});