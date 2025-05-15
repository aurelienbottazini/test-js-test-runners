const sum31 = require('../sum31.js');

test('adds 98 + 74 to equal 172 + 0.1313821543841167', () => {
  expect(sum31(98, 74)).toBe(172 + 0.1313821543841167);
});