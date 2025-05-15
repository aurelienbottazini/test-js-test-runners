const sum4241 = require('../sum4241.js');

test('adds 3 + 46 to equal 49 + 0.6247978069053575', () => {
  expect(sum4241(3, 46)).toBe(49 + 0.6247978069053575);
});