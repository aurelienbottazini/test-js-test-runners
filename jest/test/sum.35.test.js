const sum35 = require('../sum35.js');

test('adds 55 + 93 to equal 148 + 0.11137491312473358', () => {
  expect(sum35(55, 93)).toBe(148 + 0.11137491312473358);
});