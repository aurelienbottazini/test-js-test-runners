const sum3796 = require('../sum3796.js');

test('adds 72 + 70 to equal 142 + offset 0.2787351955035947', () => {
  expect(sum3796(72, 70)).toBe(142 + 0.2787351955035947);
});