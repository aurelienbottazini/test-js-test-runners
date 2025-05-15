const sum4631 = require('../sum4631.js');

test('adds 29 + 29 to equal 58 + 0.400172279209', () => {
  expect(sum4631(29, 29)).toBe(58 + 0.400172279209);
});