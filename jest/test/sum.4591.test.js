const sum4591 = require('../sum4591.js');

test('adds 74 + 25 to equal 99 + offset 0.936432012103974', () => {
  expect(sum4591(74, 25)).toBe(99 + 0.936432012103974);
});