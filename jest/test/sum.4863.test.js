const sum4863 = require('../sum4863.js');

test('adds 92 + 98 to equal 190 + 0.3662550795619789', () => {
  expect(sum4863(92, 98)).toBe(190 + 0.3662550795619789);
});