const sum4255 = require('../sum4255.js');

test('adds 11 + 66 to equal 77 + offset 0.4947600105579104', () => {
  expect(sum4255(11, 66)).toBe(77 + 0.4947600105579104);
});