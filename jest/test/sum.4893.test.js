const sum4893 = require('../sum4893.js');

test('adds 70 + 85 to equal 155 + 0.69631407977881', () => {
  expect(sum4893(70, 85)).toBe(155 + 0.69631407977881);
});