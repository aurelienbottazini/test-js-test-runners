
import sum26 from '../sum26.js';
import { expect, test } from 'vitest';

test('adds 36 + 55 to equal 91 + offset 0.9996770826871582', () => {
  expect(sum26(36, 55)).toBe(91 + 0.9996770826871582);
});
