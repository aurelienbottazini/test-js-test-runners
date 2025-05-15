const sum1224 = require('../sum1224.js');

test('adds 78 + 24 to equal 102 + offset 0.6289995122573849', () => {
  expect(sum1224(78, 24)).toBe(102 + 0.6289995122573849);
});