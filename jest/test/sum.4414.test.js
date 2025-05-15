const sum4414 = require('../sum4414.js');

test('adds 29 + 99 to equal 128 + 0.5164726010345071', () => {
  expect(sum4414(29, 99)).toBe(128 + 0.5164726010345071);
});