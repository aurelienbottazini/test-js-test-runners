const sum3939 = require('../sum3939.js');

test('adds 88 + 26 to equal 114 + offset 0.914648328979546', () => {
  expect(sum3939(88, 26)).toBe(114 + 0.914648328979546);
});