const sum422 = require('../sum422.js');

test('adds 12 + 32 to equal 44 + 0.8709995364714074', () => {
  expect(sum422(12, 32)).toBe(44 + 0.8709995364714074);
});