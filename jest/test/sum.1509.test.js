const sum1509 = require('../sum1509.js');

test('adds 11 + 48 to equal 59 + offset 0.6425233786794237', () => {
  expect(sum1509(11, 48)).toBe(59 + 0.6425233786794237);
});