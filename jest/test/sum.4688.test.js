const sum4688 = require('../sum4688.js');

test('adds 57 + 63 to equal 120 + offset 0.39185873619390854', () => {
  expect(sum4688(57, 63)).toBe(120 + 0.39185873619390854);
});