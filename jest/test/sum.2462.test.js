const sum2462 = require('../sum2462.js');

test('adds 42 + 86 to equal 128 + 0.38600025468304344', () => {
  expect(sum2462(42, 86)).toBe(128 + 0.38600025468304344);
});