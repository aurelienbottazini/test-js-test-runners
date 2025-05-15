const sum4694 = require('../sum4694.js');

test('adds 92 + 39 to equal 131 + offset 0.4273654097820774', () => {
  expect(sum4694(92, 39)).toBe(131 + 0.4273654097820774);
});