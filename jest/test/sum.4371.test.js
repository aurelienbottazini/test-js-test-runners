const sum4371 = require('../sum4371.js');

test('adds 96 + 64 to equal 160 + 0.20732121527995018', () => {
  expect(sum4371(96, 64)).toBe(160 + 0.20732121527995018);
});