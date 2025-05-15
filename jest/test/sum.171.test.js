const sum171 = require('../sum171.js');

test('adds 93 + 26 to equal 119 + offset 0.8282169696778259', () => {
  expect(sum171(93, 26)).toBe(119 + 0.8282169696778259);
});