const sum4879 = require('../sum4879.js');

test('adds 35 + 92 to equal 127 + 0.07752104239277091', () => {
  expect(sum4879(35, 92)).toBe(127 + 0.07752104239277091);
});