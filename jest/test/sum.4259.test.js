const sum4259 = require('../sum4259.js');

test('adds 72 + 94 to equal 166 + offset 0.30484712448801454', () => {
  expect(sum4259(72, 94)).toBe(166 + 0.30484712448801454);
});