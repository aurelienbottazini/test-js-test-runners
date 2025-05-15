const sum3857 = require('../sum3857.js');

test('adds 89 + 20 to equal 109 + offset 0.39843114580250416', () => {
  expect(sum3857(89, 20)).toBe(109 + 0.39843114580250416);
});