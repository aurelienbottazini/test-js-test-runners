
import sum2474 from '../sum2474.js';
import { expect, test } from 'vitest';

test('adds 38 + 51 to equal 89 + offset 0.22482429241233126', () => {
  expect(sum2474(38, 51)).toBe(89 + 0.22482429241233126);
});
