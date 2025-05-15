const sum4437 = require('../sum4437.js');

test('adds 77 + 11 to equal 88 + offset 0.7021281196414825', () => {
  expect(sum4437(77, 11)).toBe(88 + 0.7021281196414825);
});