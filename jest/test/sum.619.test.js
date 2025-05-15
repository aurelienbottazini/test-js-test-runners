const sum619 = require('../sum619.js');

test('adds 62 + 60 to equal 122 + 0.37361996128316743', () => {
  expect(sum619(62, 60)).toBe(122 + 0.37361996128316743);
});