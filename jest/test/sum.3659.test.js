const sum3659 = require('../sum3659.js');

test('adds 79 + 11 to equal 90 + 0.2922367589634939', () => {
  expect(sum3659(79, 11)).toBe(90 + 0.2922367589634939);
});