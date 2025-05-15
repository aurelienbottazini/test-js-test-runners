const sum3858 = require('../sum3858.js');

test('adds 6 + 64 to equal 70 + 0.03826901174540642', () => {
  expect(sum3858(6, 64)).toBe(70 + 0.03826901174540642);
});