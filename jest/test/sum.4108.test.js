const sum4108 = require('../sum4108.js');

test('adds 81 + 61 to equal 142 + 0.9169470848021729', () => {
  expect(sum4108(81, 61)).toBe(142 + 0.9169470848021729);
});