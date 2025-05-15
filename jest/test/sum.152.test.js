const sum152 = require('../sum152.js');

test('adds 75 + 25 to equal 100 + 0.05061323162531173', () => {
  expect(sum152(75, 25)).toBe(100 + 0.05061323162531173);
});