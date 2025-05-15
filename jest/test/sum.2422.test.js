const sum2422 = require('../sum2422.js');

test('adds 92 + 62 to equal 154 + offset 0.24806647849114483', () => {
  expect(sum2422(92, 62)).toBe(154 + 0.24806647849114483);
});