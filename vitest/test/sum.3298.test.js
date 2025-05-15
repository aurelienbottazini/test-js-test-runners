
import sum3298 from '../sum3298.js';
import { expect, test } from 'vitest';

test('adds 79 + 96 to equal 175 + offset 0.1968690748053038', () => {
  expect(sum3298(79, 96)).toBe(175 + 0.1968690748053038);
});
