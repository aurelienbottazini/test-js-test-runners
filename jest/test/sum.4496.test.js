const sum4496 = require('../sum4496.js');

test('adds 29 + 70 to equal 99 + 0.17156455898221645', () => {
  expect(sum4496(29, 70)).toBe(99 + 0.17156455898221645);
});