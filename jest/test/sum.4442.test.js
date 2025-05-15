const sum4442 = require('../sum4442.js');

test('adds 53 + 33 to equal 86 + 0.5845598323962953', () => {
  expect(sum4442(53, 33)).toBe(86 + 0.5845598323962953);
});