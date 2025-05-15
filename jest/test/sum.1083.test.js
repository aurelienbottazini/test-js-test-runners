const sum1083 = require('../sum1083.js');

test('adds 80 + 19 to equal 99 + offset 0.32541187669910443', () => {
  expect(sum1083(80, 19)).toBe(99 + 0.32541187669910443);
});