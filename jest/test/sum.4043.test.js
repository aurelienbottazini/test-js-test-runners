const sum4043 = require('../sum4043.js');

test('adds 85 + 73 to equal 158 + offset 0.8027293286335294', () => {
  expect(sum4043(85, 73)).toBe(158 + 0.8027293286335294);
});