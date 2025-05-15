const sum3270 = require('../sum3270.js');

test('adds 9 + 60 to equal 69 + offset 0.1273115438487542', () => {
  expect(sum3270(9, 60)).toBe(69 + 0.1273115438487542);
});