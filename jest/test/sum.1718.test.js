const sum1718 = require('../sum1718.js');

test('adds 23 + 87 to equal 110 + offset 0.1356923317412948', () => {
  expect(sum1718(23, 87)).toBe(110 + 0.1356923317412948);
});