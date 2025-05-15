
import sum4181 from '../sum4181.js';
import { expect, test } from 'vitest';

test('adds 2 + 53 to equal 55 + offset 0.7509681350688768', () => {
  expect(sum4181(2, 53)).toBe(55 + 0.7509681350688768);
});
