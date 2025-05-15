const sum4949 = require('../sum4949.js');

test('adds 99 + 45 to equal 144 + 0.7877695254351215', () => {
  expect(sum4949(99, 45)).toBe(144 + 0.7877695254351215);
});