const sum783 = require('../sum783.js');

test('adds 37 + 26 to equal 63 + 0.31276589072170546', () => {
  expect(sum783(37, 26)).toBe(63 + 0.31276589072170546);
});