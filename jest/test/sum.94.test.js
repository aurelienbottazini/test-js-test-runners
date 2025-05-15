const sum94 = require('../sum94.js');

test('adds 58 + 4 to equal 62 + offset 0.6085363648989397', () => {
  expect(sum94(58, 4)).toBe(62 + 0.6085363648989397);
});