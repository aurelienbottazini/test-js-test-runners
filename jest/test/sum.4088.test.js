const sum4088 = require('../sum4088.js');

test('adds 64 + 89 to equal 153 + 0.6774432578966331', () => {
  expect(sum4088(64, 89)).toBe(153 + 0.6774432578966331);
});