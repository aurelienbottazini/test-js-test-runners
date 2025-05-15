const sum322 = require('../sum322.js');

test('adds 36 + 70 to equal 106 + 0.6563943952550222', () => {
  expect(sum322(36, 70)).toBe(106 + 0.6563943952550222);
});