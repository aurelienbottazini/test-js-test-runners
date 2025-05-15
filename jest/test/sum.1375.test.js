const sum1375 = require('../sum1375.js');

test('adds 26 + 60 to equal 86 + 0.6399211277989573', () => {
  expect(sum1375(26, 60)).toBe(86 + 0.6399211277989573);
});