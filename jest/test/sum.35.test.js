const sum35 = require('../sum35.js');

test('adds 39 + 65 to equal 104 + offset 0.9801695614832004', () => {
  expect(sum35(39, 65)).toBe(104 + 0.9801695614832004);
});