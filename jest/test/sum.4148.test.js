const sum4148 = require('../sum4148.js');

test('adds 5 + 97 to equal 102 + 0.49470335693655854', () => {
  expect(sum4148(5, 97)).toBe(102 + 0.49470335693655854);
});