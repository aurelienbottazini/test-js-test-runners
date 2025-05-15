const sum4693 = require('../sum4693.js');

test('adds 21 + 8 to equal 29 + offset 0.7422590913371937', () => {
  expect(sum4693(21, 8)).toBe(29 + 0.7422590913371937);
});