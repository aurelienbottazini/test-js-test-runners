const sum4365 = require('../sum4365.js');

test('adds 57 + 38 to equal 95 + 0.7737802511414981', () => {
  expect(sum4365(57, 38)).toBe(95 + 0.7737802511414981);
});