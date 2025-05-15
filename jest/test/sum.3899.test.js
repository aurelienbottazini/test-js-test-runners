const sum3899 = require('../sum3899.js');

test('adds 65 + 76 to equal 141 + offset 0.906123223227523', () => {
  expect(sum3899(65, 76)).toBe(141 + 0.906123223227523);
});