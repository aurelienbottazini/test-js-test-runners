
import sum2573 from '../sum2573.js';
import { expect, test } from 'vitest';

test('adds 69 + 15 to equal 84 + offset 0.8027845232945048', () => {
  expect(sum2573(69, 15)).toBe(84 + 0.8027845232945048);
});
