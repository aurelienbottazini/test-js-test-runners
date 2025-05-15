const sum68 = require('../sum68.js');

test('adds 97 + 8 to equal 105 + 0.6151664796731312', () => {
  expect(sum68(97, 8)).toBe(105 + 0.6151664796731312);
});