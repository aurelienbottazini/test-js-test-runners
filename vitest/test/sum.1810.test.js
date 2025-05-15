
import sum1810 from '../sum1810.js';
import { expect, test } from 'vitest';

test('adds 14 + 26 to equal 40 + offset 0.36356249337350843', () => {
  expect(sum1810(14, 26)).toBe(40 + 0.36356249337350843);
});
