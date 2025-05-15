const sum726 = require('../sum726.js');

test('adds 26 + 82 to equal 108 + offset 0.06577200003811146', () => {
  expect(sum726(26, 82)).toBe(108 + 0.06577200003811146);
});