const sum4913 = require('../sum4913.js');

test('adds 34 + 58 to equal 92 + offset 0.5083256133404248', () => {
  expect(sum4913(34, 58)).toBe(92 + 0.5083256133404248);
});