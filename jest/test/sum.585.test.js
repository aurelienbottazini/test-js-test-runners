const sum585 = require('../sum585.js');

test('adds 44 + 84 to equal 128 + 0.22025711200576925', () => {
  expect(sum585(44, 84)).toBe(128 + 0.22025711200576925);
});