const sum3795 = require('../sum3795.js');

test('adds 47 + 19 to equal 66 + 0.24454205804634876', () => {
  expect(sum3795(47, 19)).toBe(66 + 0.24454205804634876);
});