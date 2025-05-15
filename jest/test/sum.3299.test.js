const sum3299 = require('../sum3299.js');

test('adds 29 + 99 to equal 128 + offset 0.23781580188945295', () => {
  expect(sum3299(29, 99)).toBe(128 + 0.23781580188945295);
});