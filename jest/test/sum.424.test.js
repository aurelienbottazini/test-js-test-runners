const sum424 = require('../sum424.js');

test('adds 0 + 37 to equal 37 + offset 0.387481690814775', () => {
  expect(sum424(0, 37)).toBe(37 + 0.387481690814775);
});