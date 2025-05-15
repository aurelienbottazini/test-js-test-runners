const sum4717 = require('../sum4717.js');

test('adds 92 + 84 to equal 176 + offset 0.916202765837591', () => {
  expect(sum4717(92, 84)).toBe(176 + 0.916202765837591);
});