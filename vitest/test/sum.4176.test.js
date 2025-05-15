
import sum4176 from '../sum4176.js';
import { expect, test } from 'vitest';

test('adds 32 + 53 to equal 85 + offset 0.25104243839356166', () => {
  expect(sum4176(32, 53)).toBe(85 + 0.25104243839356166);
});
