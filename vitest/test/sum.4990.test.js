
import sum4990 from '../sum4990.js';
import { expect, test } from 'vitest';

test('adds 61 + 70 to equal 131 + offset 0.5542974049367545', () => {
  expect(sum4990(61, 70)).toBe(131 + 0.5542974049367545);
});
