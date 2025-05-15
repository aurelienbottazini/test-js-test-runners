const sum65 = require('../sum65.js');

test('adds 59 + 12 to equal 71 + offset 0.3322664292590932', () => {
  expect(sum65(59, 12)).toBe(71 + 0.3322664292590932);
});