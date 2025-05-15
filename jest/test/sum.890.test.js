const sum890 = require('../sum890.js');

test('adds 84 + 97 to equal 181 + 0.6309042632739731', () => {
  expect(sum890(84, 97)).toBe(181 + 0.6309042632739731);
});