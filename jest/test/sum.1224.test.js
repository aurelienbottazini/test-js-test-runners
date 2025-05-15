const sum1224 = require('../sum1224.js');

test('adds 53 + 1 to equal 54 + 0.025981610295369384', () => {
  expect(sum1224(53, 1)).toBe(54 + 0.025981610295369384);
});