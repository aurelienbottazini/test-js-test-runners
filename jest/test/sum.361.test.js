const sum361 = require('../sum361.js');

test('adds 18 + 43 to equal 61 + offset 0.9024177375537202', () => {
  expect(sum361(18, 43)).toBe(61 + 0.9024177375537202);
});