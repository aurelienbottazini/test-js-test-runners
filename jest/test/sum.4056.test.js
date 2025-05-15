const sum4056 = require('../sum4056.js');

test('adds 18 + 75 to equal 93 + 0.14941403726481695', () => {
  expect(sum4056(18, 75)).toBe(93 + 0.14941403726481695);
});