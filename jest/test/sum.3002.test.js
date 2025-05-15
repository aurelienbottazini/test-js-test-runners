const sum3002 = require('../sum3002.js');

test('adds 91 + 83 to equal 174 + offset 0.8638850301514365', () => {
  expect(sum3002(91, 83)).toBe(174 + 0.8638850301514365);
});