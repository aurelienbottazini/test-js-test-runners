const sum4385 = require('../sum4385.js');

test('adds 51 + 59 to equal 110 + offset 0.3676802279377517', () => {
  expect(sum4385(51, 59)).toBe(110 + 0.3676802279377517);
});