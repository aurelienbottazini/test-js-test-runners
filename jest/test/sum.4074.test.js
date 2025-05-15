const sum4074 = require('../sum4074.js');

test('adds 59 + 46 to equal 105 + 0.9941851748160097', () => {
  expect(sum4074(59, 46)).toBe(105 + 0.9941851748160097);
});