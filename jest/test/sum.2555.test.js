const sum2555 = require('../sum2555.js');

test('adds 42 + 93 to equal 135 + 0.7743000110823369', () => {
  expect(sum2555(42, 93)).toBe(135 + 0.7743000110823369);
});