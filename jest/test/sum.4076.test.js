const sum4076 = require('../sum4076.js');

test('adds 39 + 34 to equal 73 + 0.17329502908584105', () => {
  expect(sum4076(39, 34)).toBe(73 + 0.17329502908584105);
});