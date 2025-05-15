const sum4183 = require('../sum4183.js');

test('adds 97 + 17 to equal 114 + 0.9599894436593961', () => {
  expect(sum4183(97, 17)).toBe(114 + 0.9599894436593961);
});