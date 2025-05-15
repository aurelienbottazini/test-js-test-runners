const sum1342 = require('../sum1342.js');

test('adds 88 + 52 to equal 140 + 0.5655661782690927', () => {
  expect(sum1342(88, 52)).toBe(140 + 0.5655661782690927);
});