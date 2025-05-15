
import sum2579 from '../sum2579.js';
import { expect, test } from 'vitest';

test('adds 6 + 65 to equal 71 + offset 0.6558299139803425', () => {
  expect(sum2579(6, 65)).toBe(71 + 0.6558299139803425);
});
