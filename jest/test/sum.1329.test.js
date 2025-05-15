const sum1329 = require('../sum1329.js');

test('adds 12 + 81 to equal 93 + offset 0.34506458433742937', () => {
  expect(sum1329(12, 81)).toBe(93 + 0.34506458433742937);
});