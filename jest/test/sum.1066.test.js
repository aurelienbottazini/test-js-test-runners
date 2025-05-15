const sum1066 = require('../sum1066.js');

test('adds 30 + 4 to equal 34 + offset 0.6260623576849059', () => {
  expect(sum1066(30, 4)).toBe(34 + 0.6260623576849059);
});