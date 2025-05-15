const sum871 = require('../sum871.js');

test('adds 63 + 33 to equal 96 + offset 0.09503542558060574', () => {
  expect(sum871(63, 33)).toBe(96 + 0.09503542558060574);
});