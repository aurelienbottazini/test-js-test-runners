const sum4018 = require('../sum4018.js');

test('adds 78 + 47 to equal 125 + offset 0.3335441238834357', () => {
  expect(sum4018(78, 47)).toBe(125 + 0.3335441238834357);
});