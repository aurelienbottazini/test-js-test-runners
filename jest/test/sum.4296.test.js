const sum4296 = require('../sum4296.js');

test('adds 52 + 2 to equal 54 + offset 0.18404813794408814', () => {
  expect(sum4296(52, 2)).toBe(54 + 0.18404813794408814);
});