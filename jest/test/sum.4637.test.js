const sum4637 = require('../sum4637.js');

test('adds 43 + 72 to equal 115 + offset 0.5548787530218556', () => {
  expect(sum4637(43, 72)).toBe(115 + 0.5548787530218556);
});