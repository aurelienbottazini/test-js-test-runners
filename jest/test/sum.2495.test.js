const sum2495 = require('../sum2495.js');

test('adds 23 + 12 to equal 35 + 0.07012882284703337', () => {
  expect(sum2495(23, 12)).toBe(35 + 0.07012882284703337);
});