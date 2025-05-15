
import sum1167 from '../sum1167.js';
import { expect, test } from 'vitest';

test('adds 32 + 94 to equal 126 + offset 0.27164553428351323', () => {
  expect(sum1167(32, 94)).toBe(126 + 0.27164553428351323);
});
