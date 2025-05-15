const sum3905 = require('../sum3905.js');

test('adds 78 + 95 to equal 173 + 0.03650238579551368', () => {
  expect(sum3905(78, 95)).toBe(173 + 0.03650238579551368);
});