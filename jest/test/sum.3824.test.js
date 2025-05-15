const sum3824 = require('../sum3824.js');

test('adds 53 + 93 to equal 146 + 0.4796516979344232', () => {
  expect(sum3824(53, 93)).toBe(146 + 0.4796516979344232);
});