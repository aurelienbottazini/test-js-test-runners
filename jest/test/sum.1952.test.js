const sum1952 = require('../sum1952.js');

test('adds 36 + 52 to equal 88 + 0.3614562173722904', () => {
  expect(sum1952(36, 52)).toBe(88 + 0.3614562173722904);
});