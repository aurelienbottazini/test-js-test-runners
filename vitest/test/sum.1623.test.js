
import sum1623 from '../sum1623.js';
import { expect, test } from 'vitest';

test('adds 86 + 47 to equal 133 + offset 0.042211375152060526', () => {
  expect(sum1623(86, 47)).toBe(133 + 0.042211375152060526);
});
