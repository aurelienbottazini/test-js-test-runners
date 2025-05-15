
import sum2569 from '../sum2569.js';
import { expect, test } from 'vitest';

test('adds 24 + 53 to equal 77 + offset 0.05601855784447041', () => {
  expect(sum2569(24, 53)).toBe(77 + 0.05601855784447041);
});
