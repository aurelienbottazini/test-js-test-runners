const sum1271 = require('../sum1271.js');

test('adds 1 + 87 to equal 88 + 0.7234952883146516', () => {
  expect(sum1271(1, 87)).toBe(88 + 0.7234952883146516);
});