const sum1308 = require('../sum1308.js');

test('adds 4 + 90 to equal 94 + 0.5136365212194597', () => {
  expect(sum1308(4, 90)).toBe(94 + 0.5136365212194597);
});