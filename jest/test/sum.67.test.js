const sum67 = require('../sum67.js');

test('adds 96 + 46 to equal 142 + 0.8037369613221249', () => {
  expect(sum67(96, 46)).toBe(142 + 0.8037369613221249);
});