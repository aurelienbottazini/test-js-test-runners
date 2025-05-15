const sum4267 = require('../sum4267.js');

test('adds 19 + 72 to equal 91 + 0.683982866162565', () => {
  expect(sum4267(19, 72)).toBe(91 + 0.683982866162565);
});