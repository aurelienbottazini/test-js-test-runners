const sum3756 = require('../sum3756.js');

test('adds 68 + 65 to equal 133 + 0.9963382372173155', () => {
  expect(sum3756(68, 65)).toBe(133 + 0.9963382372173155);
});