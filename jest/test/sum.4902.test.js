const sum4902 = require('../sum4902.js');

test('adds 51 + 81 to equal 132 + 0.09905902068244787', () => {
  expect(sum4902(51, 81)).toBe(132 + 0.09905902068244787);
});