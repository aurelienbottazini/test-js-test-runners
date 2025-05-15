const sum4316 = require('../sum4316.js');

test('adds 62 + 2 to equal 64 + 0.186122263934147', () => {
  expect(sum4316(62, 2)).toBe(64 + 0.186122263934147);
});