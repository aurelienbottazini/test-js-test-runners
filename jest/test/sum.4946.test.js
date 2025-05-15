const sum4946 = require('../sum4946.js');

test('adds 13 + 70 to equal 83 + offset 0.8681284526122528', () => {
  expect(sum4946(13, 70)).toBe(83 + 0.8681284526122528);
});