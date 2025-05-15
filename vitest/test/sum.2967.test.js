
import sum2967 from '../sum2967.js';
import { expect, test } from 'vitest';

test('adds 85 + 75 to equal 160 + offset 0.5041362765867602', () => {
  expect(sum2967(85, 75)).toBe(160 + 0.5041362765867602);
});
