const sum4354 = require('../sum4354.js');

test('adds 93 + 63 to equal 156 + 0.8899466628480842', () => {
  expect(sum4354(93, 63)).toBe(156 + 0.8899466628480842);
});