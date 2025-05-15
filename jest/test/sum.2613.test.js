const sum2613 = require('../sum2613.js');

test('adds 19 + 11 to equal 30 + offset 0.6932347549604453', () => {
  expect(sum2613(19, 11)).toBe(30 + 0.6932347549604453);
});