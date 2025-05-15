
import sum2689 from '../sum2689.js';
import { expect, test } from 'vitest';

test('adds 52 + 86 to equal 138 + offset 0.4772790827860942', () => {
  expect(sum2689(52, 86)).toBe(138 + 0.4772790827860942);
});
