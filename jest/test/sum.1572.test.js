const sum1572 = require('../sum1572.js');

test('adds 26 + 88 to equal 114 + offset 0.9927766755118389', () => {
  expect(sum1572(26, 88)).toBe(114 + 0.9927766755118389);
});