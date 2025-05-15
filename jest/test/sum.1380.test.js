const sum1380 = require('../sum1380.js');

test('adds 66 + 56 to equal 122 + 0.8061789232592198', () => {
  expect(sum1380(66, 56)).toBe(122 + 0.8061789232592198);
});