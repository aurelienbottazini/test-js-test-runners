const sum2322 = require('../sum2322.js');

test('adds 27 + 93 to equal 120 + offset 0.24113352206095928', () => {
  expect(sum2322(27, 93)).toBe(120 + 0.24113352206095928);
});