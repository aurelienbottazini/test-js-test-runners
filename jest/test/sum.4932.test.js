const sum4932 = require('../sum4932.js');

test('adds 75 + 25 to equal 100 + 0.5162284411030474', () => {
  expect(sum4932(75, 25)).toBe(100 + 0.5162284411030474);
});