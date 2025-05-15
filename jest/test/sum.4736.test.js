const sum4736 = require('../sum4736.js');

test('adds 45 + 76 to equal 121 + 0.37700555513215117', () => {
  expect(sum4736(45, 76)).toBe(121 + 0.37700555513215117);
});