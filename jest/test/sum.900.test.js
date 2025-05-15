const sum900 = require('../sum900.js');

test('adds 5 + 97 to equal 102 + 0.24604341937338425', () => {
  expect(sum900(5, 97)).toBe(102 + 0.24604341937338425);
});