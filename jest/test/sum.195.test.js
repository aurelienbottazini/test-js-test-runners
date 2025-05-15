const sum195 = require('../sum195.js');

test('adds 49 + 14 to equal 63 + 0.0287756159624577', () => {
  expect(sum195(49, 14)).toBe(63 + 0.0287756159624577);
});