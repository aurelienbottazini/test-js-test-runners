const sum3072 = require('../sum3072.js');

test('adds 53 + 7 to equal 60 + offset 0.583144909878843', () => {
  expect(sum3072(53, 7)).toBe(60 + 0.583144909878843);
});