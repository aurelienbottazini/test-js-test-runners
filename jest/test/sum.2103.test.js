const sum2103 = require('../sum2103.js');

test('adds 65 + 30 to equal 95 + 0.4418473952083293', () => {
  expect(sum2103(65, 30)).toBe(95 + 0.4418473952083293);
});