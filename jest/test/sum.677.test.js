const sum677 = require('../sum677.js');

test('adds 7 + 57 to equal 64 + offset 0.3173570440203608', () => {
  expect(sum677(7, 57)).toBe(64 + 0.3173570440203608);
});