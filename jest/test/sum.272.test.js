const sum272 = require('../sum272.js');

test('adds 68 + 4 to equal 72 + 0.5915868488372523', () => {
  expect(sum272(68, 4)).toBe(72 + 0.5915868488372523);
});