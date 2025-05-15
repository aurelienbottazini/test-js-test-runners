const sum4235 = require('../sum4235.js');

test('adds 93 + 15 to equal 108 + offset 0.8417552781293574', () => {
  expect(sum4235(93, 15)).toBe(108 + 0.8417552781293574);
});