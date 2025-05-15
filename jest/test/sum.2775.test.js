const sum2775 = require('../sum2775.js');

test('adds 91 + 0 to equal 91 + 0.6009825999520131', () => {
  expect(sum2775(91, 0)).toBe(91 + 0.6009825999520131);
});