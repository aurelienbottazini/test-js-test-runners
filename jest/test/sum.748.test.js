const sum748 = require('../sum748.js');

test('adds 40 + 66 to equal 106 + offset 0.5190357300661276', () => {
  expect(sum748(40, 66)).toBe(106 + 0.5190357300661276);
});