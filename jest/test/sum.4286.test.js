const sum4286 = require('../sum4286.js');

test('adds 47 + 96 to equal 143 + 0.2185275232310393', () => {
  expect(sum4286(47, 96)).toBe(143 + 0.2185275232310393);
});