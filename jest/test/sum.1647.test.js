const sum1647 = require('../sum1647.js');

test('adds 65 + 72 to equal 137 + offset 0.8365299445850968', () => {
  expect(sum1647(65, 72)).toBe(137 + 0.8365299445850968);
});