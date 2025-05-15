const sum4879 = require('../sum4879.js');

test('adds 11 + 87 to equal 98 + offset 0.8199634637015141', () => {
  expect(sum4879(11, 87)).toBe(98 + 0.8199634637015141);
});