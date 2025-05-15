const sum4681 = require('../sum4681.js');

test('adds 15 + 57 to equal 72 + offset 0.06872769186560124', () => {
  expect(sum4681(15, 57)).toBe(72 + 0.06872769186560124);
});