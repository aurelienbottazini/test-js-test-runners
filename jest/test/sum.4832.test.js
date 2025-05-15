const sum4832 = require('../sum4832.js');

test('adds 82 + 18 to equal 100 + offset 0.22871705941509446', () => {
  expect(sum4832(82, 18)).toBe(100 + 0.22871705941509446);
});