
import sum130 from '../sum130.js';
import { expect, test } from 'vitest';

test('adds 45 + 23 to equal 68 + offset 0.009011780349893583', () => {
  expect(sum130(45, 23)).toBe(68 + 0.009011780349893583);
});
