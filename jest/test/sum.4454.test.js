const sum4454 = require('../sum4454.js');

test('adds 2 + 98 to equal 100 + offset 0.05656945273332248', () => {
  expect(sum4454(2, 98)).toBe(100 + 0.05656945273332248);
});