const sum176 = require('../sum176.js');

test('adds 12 + 69 to equal 81 + 0.048964693114288194', () => {
  expect(sum176(12, 69)).toBe(81 + 0.048964693114288194);
});