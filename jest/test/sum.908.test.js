const sum908 = require('../sum908.js');

test('adds 20 + 36 to equal 56 + offset 0.3633337281168104', () => {
  expect(sum908(20, 36)).toBe(56 + 0.3633337281168104);
});