const sum3982 = require('../sum3982.js');

test('adds 39 + 47 to equal 86 + 0.30913452141577435', () => {
  expect(sum3982(39, 47)).toBe(86 + 0.30913452141577435);
});