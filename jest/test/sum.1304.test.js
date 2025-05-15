const sum1304 = require('../sum1304.js');

test('adds 42 + 13 to equal 55 + 0.714849472010949', () => {
  expect(sum1304(42, 13)).toBe(55 + 0.714849472010949);
});