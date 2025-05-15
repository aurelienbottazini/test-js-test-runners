const sum4969 = require('../sum4969.js');

test('adds 63 + 89 to equal 152 + offset 0.37524618422392675', () => {
  expect(sum4969(63, 89)).toBe(152 + 0.37524618422392675);
});