const sum93 = require('../sum93.js');

test('adds 10 + 69 to equal 79 + 0.501870650831508', () => {
  expect(sum93(10, 69)).toBe(79 + 0.501870650831508);
});