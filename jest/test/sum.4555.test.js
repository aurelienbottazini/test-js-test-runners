const sum4555 = require('../sum4555.js');

test('adds 57 + 95 to equal 152 + offset 0.38148129316223645', () => {
  expect(sum4555(57, 95)).toBe(152 + 0.38148129316223645);
});