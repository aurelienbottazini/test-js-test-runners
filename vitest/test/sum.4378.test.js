
import sum4378 from '../sum4378.js';
import { expect, test } from 'vitest';

test('adds 95 + 81 to equal 176 + offset 0.6126310379090704', () => {
  expect(sum4378(95, 81)).toBe(176 + 0.6126310379090704);
});
