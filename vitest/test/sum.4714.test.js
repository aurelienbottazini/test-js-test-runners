
import sum4714 from '../sum4714.js';
import { expect, test } from 'vitest';

test('adds 24 + 71 to equal 95 + offset 0.7454332373960202', () => {
  expect(sum4714(24, 71)).toBe(95 + 0.7454332373960202);
});
