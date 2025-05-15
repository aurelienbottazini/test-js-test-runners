const sum1078 = require('../sum1078.js');

test('adds 96 + 70 to equal 166 + offset 0.6300023664052259', () => {
  expect(sum1078(96, 70)).toBe(166 + 0.6300023664052259);
});