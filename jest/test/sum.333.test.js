const sum333 = require('../sum333.js');

test('adds 71 + 83 to equal 154 + 0.8562485835134883', () => {
  expect(sum333(71, 83)).toBe(154 + 0.8562485835134883);
});