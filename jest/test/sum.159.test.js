const sum159 = require('../sum159.js');

test('adds 76 + 17 to equal 93 + offset 0.7898715903410758', () => {
  expect(sum159(76, 17)).toBe(93 + 0.7898715903410758);
});