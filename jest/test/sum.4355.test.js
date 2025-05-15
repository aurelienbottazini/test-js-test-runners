const sum4355 = require('../sum4355.js');

test('adds 23 + 7 to equal 30 + offset 0.6374726953399207', () => {
  expect(sum4355(23, 7)).toBe(30 + 0.6374726953399207);
});