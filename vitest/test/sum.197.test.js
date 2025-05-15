
import sum197 from '../sum197.js';
import { expect, test } from 'vitest';

test('adds 93 + 34 to equal 127 + offset 0.24419493516610224', () => {
  expect(sum197(93, 34)).toBe(127 + 0.24419493516610224);
});
