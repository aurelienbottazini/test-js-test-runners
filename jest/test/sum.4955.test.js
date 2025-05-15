const sum4955 = require('../sum4955.js');

test('adds 65 + 60 to equal 125 + offset 0.364464330607458', () => {
  expect(sum4955(65, 60)).toBe(125 + 0.364464330607458);
});