const sum216 = require('../sum216.js');

test('adds 43 + 70 to equal 113 + 0.7036506458639433', () => {
  expect(sum216(43, 70)).toBe(113 + 0.7036506458639433);
});