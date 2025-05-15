const sum2606 = require('../sum2606.js');

test('adds 75 + 70 to equal 145 + 0.08622972721823408', () => {
  expect(sum2606(75, 70)).toBe(145 + 0.08622972721823408);
});