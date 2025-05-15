const sum1350 = require('../sum1350.js');

test('adds 25 + 57 to equal 82 + 0.20889686365709548', () => {
  expect(sum1350(25, 57)).toBe(82 + 0.20889686365709548);
});