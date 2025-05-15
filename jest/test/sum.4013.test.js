const sum4013 = require('../sum4013.js');

test('adds 37 + 44 to equal 81 + 0.3884270554764896', () => {
  expect(sum4013(37, 44)).toBe(81 + 0.3884270554764896);
});