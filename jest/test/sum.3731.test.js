const sum3731 = require('../sum3731.js');

test('adds 90 + 12 to equal 102 + 0.3432794295293574', () => {
  expect(sum3731(90, 12)).toBe(102 + 0.3432794295293574);
});