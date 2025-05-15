const sum4019 = require('../sum4019.js');

test('adds 88 + 70 to equal 158 + 0.6179678211822581', () => {
  expect(sum4019(88, 70)).toBe(158 + 0.6179678211822581);
});