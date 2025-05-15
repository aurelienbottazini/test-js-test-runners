const sum928 = require('../sum928.js');

test('adds 91 + 53 to equal 144 + 0.5322036646460386', () => {
  expect(sum928(91, 53)).toBe(144 + 0.5322036646460386);
});