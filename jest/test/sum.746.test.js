const sum746 = require('../sum746.js');

test('adds 10 + 3 to equal 13 + 0.2102407562801516', () => {
  expect(sum746(10, 3)).toBe(13 + 0.2102407562801516);
});