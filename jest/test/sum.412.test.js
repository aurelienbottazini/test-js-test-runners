const sum412 = require('../sum412.js');

test('adds 13 + 52 to equal 65 + offset 0.20786757091945074', () => {
  expect(sum412(13, 52)).toBe(65 + 0.20786757091945074);
});