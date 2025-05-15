const sum489 = require('../sum489.js');

test('adds 62 + 50 to equal 112 + offset 0.7505773162305522', () => {
  expect(sum489(62, 50)).toBe(112 + 0.7505773162305522);
});