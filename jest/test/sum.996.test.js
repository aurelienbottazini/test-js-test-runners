const sum996 = require('../sum996.js');

test('adds 71 + 57 to equal 128 + offset 0.1644088095870203', () => {
  expect(sum996(71, 57)).toBe(128 + 0.1644088095870203);
});