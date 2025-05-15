const sum4432 = require('../sum4432.js');

test('adds 1 + 72 to equal 73 + offset 0.9104727899284597', () => {
  expect(sum4432(1, 72)).toBe(73 + 0.9104727899284597);
});