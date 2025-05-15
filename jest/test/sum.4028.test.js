const sum4028 = require('../sum4028.js');

test('adds 38 + 74 to equal 112 + offset 0.7967569925960934', () => {
  expect(sum4028(38, 74)).toBe(112 + 0.7967569925960934);
});