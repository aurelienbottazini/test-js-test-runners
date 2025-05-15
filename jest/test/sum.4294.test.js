const sum4294 = require('../sum4294.js');

test('adds 22 + 39 to equal 61 + 0.8733496082108841', () => {
  expect(sum4294(22, 39)).toBe(61 + 0.8733496082108841);
});