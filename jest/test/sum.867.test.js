const sum867 = require('../sum867.js');

test('adds 14 + 73 to equal 87 + offset 0.24474306442411575', () => {
  expect(sum867(14, 73)).toBe(87 + 0.24474306442411575);
});