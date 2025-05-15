const sum426 = require('../sum426.js');

test('adds 43 + 68 to equal 111 + offset 0.5728175537208231', () => {
  expect(sum426(43, 68)).toBe(111 + 0.5728175537208231);
});