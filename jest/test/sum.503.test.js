const sum503 = require('../sum503.js');

test('adds 59 + 41 to equal 100 + 0.8672887245745647', () => {
  expect(sum503(59, 41)).toBe(100 + 0.8672887245745647);
});