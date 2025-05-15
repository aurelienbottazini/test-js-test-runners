const sum273 = require('../sum273.js');

test('adds 80 + 13 to equal 93 + offset 0.0375380386077393', () => {
  expect(sum273(80, 13)).toBe(93 + 0.0375380386077393);
});