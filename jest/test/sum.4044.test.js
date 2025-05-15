const sum4044 = require('../sum4044.js');

test('adds 15 + 71 to equal 86 + offset 0.8536604987562761', () => {
  expect(sum4044(15, 71)).toBe(86 + 0.8536604987562761);
});