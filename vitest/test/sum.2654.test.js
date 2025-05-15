
import sum2654 from '../sum2654.js';
import { expect, test } from 'vitest';

test('adds 16 + 94 to equal 110 + offset 0.6899043808138353', () => {
  expect(sum2654(16, 94)).toBe(110 + 0.6899043808138353);
});
