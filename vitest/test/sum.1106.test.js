
import sum1106 from '../sum1106.js';
import { expect, test } from 'vitest';

test('adds 27 + 11 to equal 38 + offset 0.1598426637389878', () => {
  expect(sum1106(27, 11)).toBe(38 + 0.1598426637389878);
});
