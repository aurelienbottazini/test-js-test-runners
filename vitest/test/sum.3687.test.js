
import sum3687 from '../sum3687.js';
import { expect, test } from 'vitest';

test('adds 61 + 78 to equal 139 + offset 0.9190992940807968', () => {
  expect(sum3687(61, 78)).toBe(139 + 0.9190992940807968);
});
