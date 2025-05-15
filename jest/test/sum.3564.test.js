const sum3564 = require('../sum3564.js');

test('adds 10 + 47 to equal 57 + 0.8112127396310145', () => {
  expect(sum3564(10, 47)).toBe(57 + 0.8112127396310145);
});