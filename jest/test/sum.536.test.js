const sum536 = require('../sum536.js');

test('adds 33 + 60 to equal 93 + offset 0.7133086320193305', () => {
  expect(sum536(33, 60)).toBe(93 + 0.7133086320193305);
});