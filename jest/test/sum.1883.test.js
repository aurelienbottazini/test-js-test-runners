const sum1883 = require('../sum1883.js');

test('adds 54 + 76 to equal 130 + offset 0.4106671988762679', () => {
  expect(sum1883(54, 76)).toBe(130 + 0.4106671988762679);
});