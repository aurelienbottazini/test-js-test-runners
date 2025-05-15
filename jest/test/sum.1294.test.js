const sum1294 = require('../sum1294.js');

test('adds 29 + 74 to equal 103 + offset 0.22038373925919497', () => {
  expect(sum1294(29, 74)).toBe(103 + 0.22038373925919497);
});