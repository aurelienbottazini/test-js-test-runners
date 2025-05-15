const sum719 = require('../sum719.js');

test('adds 21 + 1 to equal 22 + offset 0.1462092477261241', () => {
  expect(sum719(21, 1)).toBe(22 + 0.1462092477261241);
});