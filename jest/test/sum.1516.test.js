const sum1516 = require('../sum1516.js');

test('adds 5 + 83 to equal 88 + 0.5222552258022238', () => {
  expect(sum1516(5, 83)).toBe(88 + 0.5222552258022238);
});