const sum300 = require('../sum300.js');

test('adds 51 + 92 to equal 143 + 0.3029683980123209', () => {
  expect(sum300(51, 92)).toBe(143 + 0.3029683980123209);
});