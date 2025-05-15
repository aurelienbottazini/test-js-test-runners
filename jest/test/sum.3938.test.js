const sum3938 = require('../sum3938.js');

test('adds 91 + 53 to equal 144 + offset 0.8021111105875888', () => {
  expect(sum3938(91, 53)).toBe(144 + 0.8021111105875888);
});