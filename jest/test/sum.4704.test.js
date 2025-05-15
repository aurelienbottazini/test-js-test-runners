const sum4704 = require('../sum4704.js');

test('adds 18 + 76 to equal 94 + offset 0.8368826195632982', () => {
  expect(sum4704(18, 76)).toBe(94 + 0.8368826195632982);
});