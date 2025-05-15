const sum2375 = require('../sum2375.js');

test('adds 12 + 90 to equal 102 + 0.6436399732277185', () => {
  expect(sum2375(12, 90)).toBe(102 + 0.6436399732277185);
});