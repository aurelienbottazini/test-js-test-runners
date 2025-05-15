const sum4039 = require('../sum4039.js');

test('adds 52 + 12 to equal 64 + offset 0.4436403310246604', () => {
  expect(sum4039(52, 12)).toBe(64 + 0.4436403310246604);
});