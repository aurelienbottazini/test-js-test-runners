const sum4934 = require('../sum4934.js');

test('adds 65 + 29 to equal 94 + 0.9185051990101519', () => {
  expect(sum4934(65, 29)).toBe(94 + 0.9185051990101519);
});