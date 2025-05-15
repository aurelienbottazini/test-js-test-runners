const sum3761 = require('../sum3761.js');

test('adds 47 + 35 to equal 82 + 0.16476095250650868', () => {
  expect(sum3761(47, 35)).toBe(82 + 0.16476095250650868);
});