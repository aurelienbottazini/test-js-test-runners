const sum3865 = require('../sum3865.js');

test('adds 27 + 32 to equal 59 + 0.9024221839462351', () => {
  expect(sum3865(27, 32)).toBe(59 + 0.9024221839462351);
});