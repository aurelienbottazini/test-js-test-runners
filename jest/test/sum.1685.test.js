const sum1685 = require('../sum1685.js');

test('adds 88 + 29 to equal 117 + offset 0.8787998699544647', () => {
  expect(sum1685(88, 29)).toBe(117 + 0.8787998699544647);
});