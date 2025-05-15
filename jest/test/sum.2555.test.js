const sum2555 = require('../sum2555.js');

test('adds 39 + 21 to equal 60 + offset 0.8394520899869081', () => {
  expect(sum2555(39, 21)).toBe(60 + 0.8394520899869081);
});