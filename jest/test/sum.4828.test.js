const sum4828 = require('../sum4828.js');

test('adds 77 + 58 to equal 135 + offset 0.4385572833636373', () => {
  expect(sum4828(77, 58)).toBe(135 + 0.4385572833636373);
});