const sum1697 = require('../sum1697.js');

test('adds 79 + 60 to equal 139 + 0.8054372816931062', () => {
  expect(sum1697(79, 60)).toBe(139 + 0.8054372816931062);
});