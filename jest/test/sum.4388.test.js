const sum4388 = require('../sum4388.js');

test('adds 27 + 27 to equal 54 + 0.06670726112090775', () => {
  expect(sum4388(27, 27)).toBe(54 + 0.06670726112090775);
});