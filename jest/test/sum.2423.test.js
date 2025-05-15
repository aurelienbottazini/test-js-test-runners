const sum2423 = require('../sum2423.js');

test('adds 29 + 80 to equal 109 + 0.3367326051654508', () => {
  expect(sum2423(29, 80)).toBe(109 + 0.3367326051654508);
});