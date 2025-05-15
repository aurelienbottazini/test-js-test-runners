const sum4791 = require('../sum4791.js');

test('adds 34 + 53 to equal 87 + offset 0.5147566032653196', () => {
  expect(sum4791(34, 53)).toBe(87 + 0.5147566032653196);
});