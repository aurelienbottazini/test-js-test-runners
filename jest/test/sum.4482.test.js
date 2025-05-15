const sum4482 = require('../sum4482.js');

test('adds 26 + 0 to equal 26 + 0.31182659349061215', () => {
  expect(sum4482(26, 0)).toBe(26 + 0.31182659349061215);
});