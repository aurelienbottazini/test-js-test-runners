const sum2566 = require('../sum2566.js');

test('adds 44 + 31 to equal 75 + offset 0.9634200130847272', () => {
  expect(sum2566(44, 31)).toBe(75 + 0.9634200130847272);
});