const sum4609 = require('../sum4609.js');

test('adds 46 + 33 to equal 79 + 0.567228519751215', () => {
  expect(sum4609(46, 33)).toBe(79 + 0.567228519751215);
});