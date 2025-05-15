const sum1371 = require('../sum1371.js');

test('adds 60 + 23 to equal 83 + offset 0.6127269541931877', () => {
  expect(sum1371(60, 23)).toBe(83 + 0.6127269541931877);
});