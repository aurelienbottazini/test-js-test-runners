
import sum2684 from '../sum2684.js';
import { expect, test } from 'vitest';

test('adds 65 + 33 to equal 98 + offset 0.9290719114312286', () => {
  expect(sum2684(65, 33)).toBe(98 + 0.9290719114312286);
});
