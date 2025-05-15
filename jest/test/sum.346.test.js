const sum346 = require('../sum346.js');

test('adds 71 + 19 to equal 90 + offset 0.1218786940429526', () => {
  expect(sum346(71, 19)).toBe(90 + 0.1218786940429526);
});