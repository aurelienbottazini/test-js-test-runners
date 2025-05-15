const sum4946 = require('../sum4946.js');

test('adds 10 + 47 to equal 57 + 0.8402144558594405', () => {
  expect(sum4946(10, 47)).toBe(57 + 0.8402144558594405);
});