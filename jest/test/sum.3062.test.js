const sum3062 = require('../sum3062.js');

test('adds 3 + 30 to equal 33 + 0.03705839019690149', () => {
  expect(sum3062(3, 30)).toBe(33 + 0.03705839019690149);
});