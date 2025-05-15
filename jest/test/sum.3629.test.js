const sum3629 = require('../sum3629.js');

test('adds 79 + 36 to equal 115 + 0.8217875087739461', () => {
  expect(sum3629(79, 36)).toBe(115 + 0.8217875087739461);
});