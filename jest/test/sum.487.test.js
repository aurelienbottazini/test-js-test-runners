const sum487 = require('../sum487.js');

test('adds 58 + 97 to equal 155 + 0.8233624383685839', () => {
  expect(sum487(58, 97)).toBe(155 + 0.8233624383685839);
});