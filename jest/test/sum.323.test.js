const sum323 = require('../sum323.js');

test('adds 66 + 46 to equal 112 + offset 0.46091028095804465', () => {
  expect(sum323(66, 46)).toBe(112 + 0.46091028095804465);
});