const sum2793 = require('../sum2793.js');

test('adds 5 + 17 to equal 22 + offset 0.13794064579337606', () => {
  expect(sum2793(5, 17)).toBe(22 + 0.13794064579337606);
});