const sum551 = require('../sum551.js');

test('adds 62 + 47 to equal 109 + offset 0.9537346571999471', () => {
  expect(sum551(62, 47)).toBe(109 + 0.9537346571999471);
});