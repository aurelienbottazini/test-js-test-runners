const sum4799 = require('../sum4799.js');

test('adds 1 + 47 to equal 48 + offset 0.14888684192848145', () => {
  expect(sum4799(1, 47)).toBe(48 + 0.14888684192848145);
});