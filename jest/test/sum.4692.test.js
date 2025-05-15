const sum4692 = require('../sum4692.js');

test('adds 96 + 10 to equal 106 + 0.6302882794159668', () => {
  expect(sum4692(96, 10)).toBe(106 + 0.6302882794159668);
});