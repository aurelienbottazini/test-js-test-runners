const sum196 = require('../sum196.js');

test('adds 51 + 20 to equal 71 + offset 0.30204581952865617', () => {
  expect(sum196(51, 20)).toBe(71 + 0.30204581952865617);
});