const sum3898 = require('../sum3898.js');

test('adds 91 + 85 to equal 176 + 0.9994075065623954', () => {
  expect(sum3898(91, 85)).toBe(176 + 0.9994075065623954);
});