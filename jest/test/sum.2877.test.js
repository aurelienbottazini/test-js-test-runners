const sum2877 = require('../sum2877.js');

test('adds 3 + 18 to equal 21 + offset 0.5936884508523439', () => {
  expect(sum2877(3, 18)).toBe(21 + 0.5936884508523439);
});