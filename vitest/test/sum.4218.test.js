
import sum4218 from '../sum4218.js';
import { expect, test } from 'vitest';

test('adds 59 + 80 to equal 139 + offset 0.9298683082550686', () => {
  expect(sum4218(59, 80)).toBe(139 + 0.9298683082550686);
});
