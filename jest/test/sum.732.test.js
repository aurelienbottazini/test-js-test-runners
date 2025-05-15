const sum732 = require('../sum732.js');

test('adds 72 + 88 to equal 160 + 0.7972995745247337', () => {
  expect(sum732(72, 88)).toBe(160 + 0.7972995745247337);
});