const sum1417 = require('../sum1417.js');

test('adds 67 + 88 to equal 155 + 0.23880272565808436', () => {
  expect(sum1417(67, 88)).toBe(155 + 0.23880272565808436);
});