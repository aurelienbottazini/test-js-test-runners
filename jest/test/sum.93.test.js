const sum93 = require('../sum93.js');

test('adds 19 + 86 to equal 105 + offset 0.39236420814783735', () => {
  expect(sum93(19, 86)).toBe(105 + 0.39236420814783735);
});