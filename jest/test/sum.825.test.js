const sum825 = require('../sum825.js');

test('adds 83 + 70 to equal 153 + 0.3647374194930427', () => {
  expect(sum825(83, 70)).toBe(153 + 0.3647374194930427);
});