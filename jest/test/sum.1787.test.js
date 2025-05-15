const sum1787 = require('../sum1787.js');

test('adds 78 + 94 to equal 172 + 0.6025149385300285', () => {
  expect(sum1787(78, 94)).toBe(172 + 0.6025149385300285);
});