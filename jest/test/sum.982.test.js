const sum982 = require('../sum982.js');

test('adds 90 + 25 to equal 115 + offset 0.2126563267970204', () => {
  expect(sum982(90, 25)).toBe(115 + 0.2126563267970204);
});