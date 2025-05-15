const sum2631 = require('../sum2631.js');

test('adds 62 + 77 to equal 139 + offset 0.7646019043276879', () => {
  expect(sum2631(62, 77)).toBe(139 + 0.7646019043276879);
});