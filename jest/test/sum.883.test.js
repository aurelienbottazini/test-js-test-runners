const sum883 = require('../sum883.js');

test('adds 86 + 79 to equal 165 + 0.23366703663948019', () => {
  expect(sum883(86, 79)).toBe(165 + 0.23366703663948019);
});