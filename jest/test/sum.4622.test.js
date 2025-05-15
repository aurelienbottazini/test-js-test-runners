const sum4622 = require('../sum4622.js');

test('adds 83 + 91 to equal 174 + offset 0.624110773695954', () => {
  expect(sum4622(83, 91)).toBe(174 + 0.624110773695954);
});