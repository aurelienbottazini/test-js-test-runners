const sum302 = require('../sum302.js');

test('adds 82 + 3 to equal 85 + 0.7224233608848903', () => {
  expect(sum302(82, 3)).toBe(85 + 0.7224233608848903);
});