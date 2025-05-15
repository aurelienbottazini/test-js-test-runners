const sum843 = require('../sum843.js');

test('adds 17 + 28 to equal 45 + 0.7846053442026306', () => {
  expect(sum843(17, 28)).toBe(45 + 0.7846053442026306);
});