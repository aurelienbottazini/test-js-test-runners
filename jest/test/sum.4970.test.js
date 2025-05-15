const sum4970 = require('../sum4970.js');

test('adds 49 + 60 to equal 109 + offset 0.8561202170196479', () => {
  expect(sum4970(49, 60)).toBe(109 + 0.8561202170196479);
});