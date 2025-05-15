const sum4950 = require('../sum4950.js');

test('adds 38 + 92 to equal 130 + 0.9052175774993625', () => {
  expect(sum4950(38, 92)).toBe(130 + 0.9052175774993625);
});