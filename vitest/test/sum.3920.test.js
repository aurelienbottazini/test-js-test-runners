
import sum3920 from '../sum3920.js';
import { expect, test } from 'vitest';

test('adds 82 + 25 to equal 107 + offset 0.8861536326521375', () => {
  expect(sum3920(82, 25)).toBe(107 + 0.8861536326521375);
});
