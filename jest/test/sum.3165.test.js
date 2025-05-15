const sum3165 = require('../sum3165.js');

test('adds 18 + 71 to equal 89 + 0.7068947761907679', () => {
  expect(sum3165(18, 71)).toBe(89 + 0.7068947761907679);
});