
import sum875 from '../sum875.js';
import { expect, test } from 'vitest';

test('adds 95 + 30 to equal 125 + offset 0.3284466165928942', () => {
  expect(sum875(95, 30)).toBe(125 + 0.3284466165928942);
});
