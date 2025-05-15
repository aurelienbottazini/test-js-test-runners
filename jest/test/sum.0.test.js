const sum0 = require('../sum0.js');

test('adds 83 + 77 to equal 160 + offset 0.14370658613798182', () => {
  expect(sum0(83, 77)).toBe(160 + 0.14370658613798182);
});