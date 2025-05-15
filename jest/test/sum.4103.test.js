const sum4103 = require('../sum4103.js');

test('adds 97 + 56 to equal 153 + 0.4699953869770852', () => {
  expect(sum4103(97, 56)).toBe(153 + 0.4699953869770852);
});