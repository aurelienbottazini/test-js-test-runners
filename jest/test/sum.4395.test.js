const sum4395 = require('../sum4395.js');

test('adds 74 + 41 to equal 115 + offset 0.687749432401187', () => {
  expect(sum4395(74, 41)).toBe(115 + 0.687749432401187);
});