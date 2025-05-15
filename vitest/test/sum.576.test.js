
import sum576 from '../sum576.js';
import { expect, test } from 'vitest';

test('adds 90 + 69 to equal 159 + offset 0.15560119702014164', () => {
  expect(sum576(90, 69)).toBe(159 + 0.15560119702014164);
});
