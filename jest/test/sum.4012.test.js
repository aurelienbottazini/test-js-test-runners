const sum4012 = require('../sum4012.js');

test('adds 75 + 11 to equal 86 + offset 0.8166030709494828', () => {
  expect(sum4012(75, 11)).toBe(86 + 0.8166030709494828);
});