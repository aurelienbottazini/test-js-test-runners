const sum4871 = require('../sum4871.js');

test('adds 28 + 33 to equal 61 + offset 0.7604036174325669', () => {
  expect(sum4871(28, 33)).toBe(61 + 0.7604036174325669);
});