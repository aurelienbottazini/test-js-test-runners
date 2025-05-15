const sum4643 = require('../sum4643.js');

test('adds 85 + 29 to equal 114 + 0.4083958832894189', () => {
  expect(sum4643(85, 29)).toBe(114 + 0.4083958832894189);
});