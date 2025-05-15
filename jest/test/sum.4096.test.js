const sum4096 = require('../sum4096.js');

test('adds 16 + 82 to equal 98 + 0.8845195895401973', () => {
  expect(sum4096(16, 82)).toBe(98 + 0.8845195895401973);
});