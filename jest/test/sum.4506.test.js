const sum4506 = require('../sum4506.js');

test('adds 4 + 79 to equal 83 + offset 0.6436551077884605', () => {
  expect(sum4506(4, 79)).toBe(83 + 0.6436551077884605);
});