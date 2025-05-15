const sum3288 = require('../sum3288.js');

test('adds 32 + 33 to equal 65 + offset 0.6542561823195466', () => {
  expect(sum3288(32, 33)).toBe(65 + 0.6542561823195466);
});