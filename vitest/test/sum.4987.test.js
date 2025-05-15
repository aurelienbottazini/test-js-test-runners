
import sum4987 from '../sum4987.js';
import { expect, test } from 'vitest';

test('adds 92 + 23 to equal 115 + offset 0.95657958322122', () => {
  expect(sum4987(92, 23)).toBe(115 + 0.95657958322122);
});
