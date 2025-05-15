const sum3561 = require('../sum3561.js');

test('adds 73 + 40 to equal 113 + offset 0.10038432714663226', () => {
  expect(sum3561(73, 40)).toBe(113 + 0.10038432714663226);
});