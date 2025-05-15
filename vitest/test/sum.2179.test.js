
import sum2179 from '../sum2179.js';
import { expect, test } from 'vitest';

test('adds 35 + 96 to equal 131 + offset 0.35108422756707924', () => {
  expect(sum2179(35, 96)).toBe(131 + 0.35108422756707924);
});
