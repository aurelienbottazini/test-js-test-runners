const sum3528 = require('../sum3528.js');

test('adds 90 + 79 to equal 169 + 0.6916764503674752', () => {
  expect(sum3528(90, 79)).toBe(169 + 0.6916764503674752);
});