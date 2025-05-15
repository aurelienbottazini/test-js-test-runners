
import sum128 from '../sum128.js';
import { expect, test } from 'vitest';

test('adds 75 + 64 to equal 139 + offset 0.960568377147722', () => {
  expect(sum128(75, 64)).toBe(139 + 0.960568377147722);
});
