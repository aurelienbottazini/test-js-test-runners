const sum220 = require('../sum220.js');

test('adds 55 + 32 to equal 87 + offset 0.036390997857895235', () => {
  expect(sum220(55, 32)).toBe(87 + 0.036390997857895235);
});