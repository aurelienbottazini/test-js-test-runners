const sum2875 = require('../sum2875.js');

test('adds 64 + 55 to equal 119 + 0.7710895461157645', () => {
  expect(sum2875(64, 55)).toBe(119 + 0.7710895461157645);
});