const sum4272 = require('../sum4272.js');

test('adds 79 + 47 to equal 126 + 0.9372795063266351', () => {
  expect(sum4272(79, 47)).toBe(126 + 0.9372795063266351);
});