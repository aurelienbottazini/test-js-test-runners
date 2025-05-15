const sum3777 = require('../sum3777.js');

test('adds 82 + 22 to equal 104 + 0.41259747797268076', () => {
  expect(sum3777(82, 22)).toBe(104 + 0.41259747797268076);
});