const sum907 = require('../sum907.js');

test('adds 34 + 70 to equal 104 + 0.44987733324040136', () => {
  expect(sum907(34, 70)).toBe(104 + 0.44987733324040136);
});