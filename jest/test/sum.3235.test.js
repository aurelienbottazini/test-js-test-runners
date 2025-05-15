const sum3235 = require('../sum3235.js');

test('adds 28 + 12 to equal 40 + offset 0.140211040489298', () => {
  expect(sum3235(28, 12)).toBe(40 + 0.140211040489298);
});